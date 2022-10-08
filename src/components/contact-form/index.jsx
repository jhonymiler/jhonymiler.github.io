import React, { useState } from 'react'
import { ArrowRight } from 'react-feather'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { FormGroup, Label, Input, Textarea, ErrorText } from '@ui/form-elements'
import Button from '@ui/button'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = ({ className, setShow }) => {
  const recaptchaRef = React.useRef()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })
    if (ok) {
      //form.reset()
    }
  }
  const onSubmit = async (data, e) => {
    const token = await recaptchaRef.current.executeAsync()

    const form = e.target
    setServerState({ submitting: true })
    try {
      await axios.post(`https://discord.com/api/webhooks/${import.meta.env.VITE_NUM_CHANEL_DISCORD}/${import.meta.env.VITE_TOKEN_DISCORD}`, {
        username: data.nome,
        embeds: [
          {
            fields: [
              {
                name: 'Tel:',
                value: data.tel
              },
              {
                name: 'Email:',
                value: data.email
              },
              {
                name: 'Assunto:',
                value: data.assunto
              },
              {
                name: 'Msg:',
                value: data.mensagem
              }
            ]
          }
        ]
      })

      handleServerResponse(true, 'Obrigado! Retornarei seu contato em breve.', form)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={cn('contact-form-wrapper', className)}>
      <div className="introduce">
        <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-lg-6">
            <FormGroup>
              <Label htmlFor="nome">Seu Nome</Label>
              <Input
                name="nome"
                id="nome"
                type="text"
                {...register('nome', {
                  required: 'Por favor digite seu nome.'
                })}
              />
              {errors.nome && <ErrorText>{errors.nome?.message}</ErrorText>}
            </FormGroup>
          </div>

          <div className="col-lg-6">
            <FormGroup>
              <Label htmlFor="tel">Telefone</Label>
              <Input
                name="tel"
                id="tel"
                type="text"
                {...register('tel', {
                  required: 'Por favor digite seu celular, de preferência o whatsapp.'
                })}
              />
              {errors.tel && <ErrorText>{errors.tel?.message}</ErrorText>}
            </FormGroup>
          </div>

          <div className="col-lg-12">
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                {...register('email', {
                  required: 'O Email é importante',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Por favor digite um email válido'
                  }
                })}
              />
              {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
            </FormGroup>
          </div>

          <div className="col-lg-12">
            <FormGroup>
              <Label htmlFor="assunto">Assunto</Label>
              <Input
                id="assunto"
                name="assunto"
                type="text"
                {...register('assunto', {
                  required: 'O assunto é importante.'
                })}
              />
              {errors.assunto && <ErrorText>{errors.assunto?.message}</ErrorText>}
            </FormGroup>
          </div>

          <div className="col-lg-12">
            <FormGroup>
              <Label htmlFor="mensagem">Digite uma mensagem</Label>
              <Textarea
                name="mensagem"
                id="mensagem"
                {...register('mensagem', {
                  required: 'Por favor digite a sua mensagem.'
                })}
              ></Textarea>
              {errors.mensagem && <ErrorText>{errors.mensagem?.message}</ErrorText>}
            </FormGroup>
          </div>

          <div className="col-lg-12">
            <ReCAPTCHA ref={recaptchaRef} sitekey="6LeXVmQiAAAAAL4v9DigMu1qQKD_JjdPJSjMf__i" size="invisible" />
            <Button
              onClick={() => {
                setShow(false)
              }}
            >
              <span>Cancelar</span>
            </Button>

            <Button type="submit">
              <span>Enviar Mensagem</span>
              <ArrowRight />
            </Button>
            {serverState.status && <p className={`mt-4 font-14 ${!serverState.status.ok ? 'text-red' : 'text-success'}`}>{serverState.status.msg}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
