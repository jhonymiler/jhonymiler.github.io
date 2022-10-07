import { Children } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import SectionTitle from '@components/section-title'

const ResumoArea = ({ data, children, id }) => {
  const childArr = Children.toArray(children)

  return (
    <div className="rn-resume-area rn-section-gap section-separator" id={data.id}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">{data?.section_title && <SectionTitle align="center" {...data.section_title} />}</div>
        </div>
        <div className="row mt--45">
          <div className="col-lg-12">
            <Tabs defaultActiveKey={childArr?.[0]?.props?.data?.id} justify className="rn-nav-list">
              {childArr.map((item) => (
                <Tab key={item.props.data.id} eventKey={item.props.data.id} title={item.props.data.title}>
                  {item}
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumoArea
