import cn from 'classnames'
import ContentTitle from '@components/content-title'
import LinguagensCard from '@components/LinguagensCard'

const SkillArea = ({ data }) => {
  return (
    <div className="personal-experience-inner mt--40">
      <div className="row row--40">
        {data?.inner?.map((content, i) => (
          <div className={cn('col-lg-6 col-md-6 col-12', i !== 0 && 'mt_sm--60')} key={content.id}>
            <div className="progress-wrapper">
              <div className="content">
                {content?.section_title && <ContentTitle {...content.section_title} />}
                <div className="client-card">
                  {content?.items?.map((item) => (
                    <LinguagensCard key={item.id} image={item.images} name={item.title} path={item.path} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillArea
