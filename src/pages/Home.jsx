import Header from '@components/header/Header'
import ScrollToTop from '@components/ui/scroll-to-top'
import '@assets/css/bootstrap.min.css'
import '@assets/scss/style.scss'
import { normalizedData } from '@utils'

import Client from '../external/client'
import Footer from '@components/footer'
import Apresentacao from './Apresentacao'
import ResumoArea from '../components/resumo'
import EducacaoArea from './EducacaoArea'
import SkillArea from './SkillArea'
import ExperienciasArea from './ExperienciasArea'
import InterviewArea from './InterviewArea'
import dataResumo from '../data/Resumo'
import { useState } from 'react'

function Home() {
  const content = normalizedData(dataResumo || [])
  const [show, setShow] = useState(false)

  return (
    <>
      <Header show={show} setShow={setShow} />
      <main className="main-page-wrapper">
        <Apresentacao show={show} setShow={setShow} />
        <ResumoArea data={content['resume-section']}>
          <ExperienciasArea data={content['experience-section']} />
          <SkillArea data={content['skill-section']} />
          <InterviewArea data={content['interview-section']} />
          <EducacaoArea data={content['education-section']} />
        </ResumoArea>
        <ScrollToTop />
      </main>
      <Footer />
      <Client />
    </>
  )
}

export default Home
