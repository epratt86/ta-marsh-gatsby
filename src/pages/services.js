import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import ServicesStyles from "./services.module.scss"
import tiledRoof from "../img/tiled-roof.jpg"
import sheetMetal from "../img/sheet-metal.jpg"
import notePad from "../img/note-pad.jpg"
import legal from "../img/legal.jpg"

const ServicesPage = () => {
  const { services, banner, row, col } = ServicesStyles
  return (
    <Layout>
      <Head title="Services" />
      <section id={services}>
        <div className={banner}>
          <div className="container">
            <h1>Services</h1>
            <h4>A variety of services available to fit your needs</h4>
          </div>
        </div>
        <div className="container">
          <div className={row}>
            <div className={col}>
              <h2>Roofing System & Service</h2>
              <ul>
                <li>Composition and Dimensional Shingles</li>
                <li>Tile, Clay and Concrete</li>
                <li>Power Washing of Tile Roof Systems</li>
                <li>Low Slope Roofs</li>
                <li>Build Up Roof (BUR) and Atactic Polypropylene (APP)</li>
                <li>Single Ply Systems</li>
                <li>Architectural Sheet Metal Roof Systems</li>
                <li>Liquid applied systems</li>
                <li>
                  Title 24 compliant reflective coating, ventilation and
                  accessories
                </li>
                <li>Restructing of Roof Systems</li>
                <li>
                  Investigations, testing, repar solutions and recomendations
                </li>
              </ul>
            </div>
            <div className={col}>
              <img src={tiledRoof} alt="Roof Construction" />
            </div>
          </div>
          <div className={row}>
            <div className={col}>
              <img src={sheetMetal} alt="Sheet Metal" />
            </div>
            <div className={col}>
              <h2>Commercial, Residential & Industrial</h2>
              <ul>
                <li>Removal of existing roof and accessories</li>
                <li>
                  Repairs or replacement of sheeting, framing, fascia and
                  framing members
                </li>
                <li>Water proofing and Deck Systems</li>
                <li>Sheet metal</li>
                <li>Gutter systems</li>
                <li>Skylights (interior & exterior)</li>
                <li>Solar systems for both photovoltaic and water systems</li>
                <li>Attic ventilation and power ventilation</li>
              </ul>
            </div>
          </div>
          <div className={row}>
            <div className={col}>
              <h2>General Contracting</h2>
              <ul>
                <li>Framing, sheeting, and sub-strait modifications</li>
                <li>Insulation</li>
                <li>Skylight and Solar Tube installations</li>
                <li>Painting</li>
                <li>Exterior building envelope repairs and solutions</li>
                <li>
                  Air Conditiong unit removal, reinstallation and new A/C
                  installations (no A/C repair)
                </li>
                <li>
                  Solar panel & system removal, reinstallation and new
                  installation
                </li>
                <li>Carpentry</li>
                <li>Demolition</li>
              </ul>
            </div>
            <div className={col}>
              <img src={notePad} alt="General Contracting" />
            </div>
          </div>
          <div className={row} style={{ paddingBottom: "2rem" }}>
            <div className={col}>
              <img src={legal} alt="Legal Consultation" />
            </div>
            <div className={col}>
              <h2>Legal Consultation</h2>
              <ul>
                <li>Expert witness testimony</li>
                <li>Trial testimony, mock ups and exhibits</li>
                <li>
                  Construction defects, site inspections, destructive testing
                </li>
                <li>Insurance claim damage analysis</li>
                <li>Destructive testing and site inspections</li>
                <li>Third party neutral expert testimony</li>
                <li>Personal injury claims</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
