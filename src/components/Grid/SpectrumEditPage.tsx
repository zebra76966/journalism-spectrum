import React, { useEffect, useState } from 'react'
import { Spectrum } from './Spectrum'

import JOURNALISTS from './data.json'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './EditPage.css'
import { Link } from 'react-router-dom'

const JournalismSpectrumEdit = (props: any) => {
  const member = 'rishabh@newslaundry.com'

  const [journalists, setJournalists] = useState(JOURNALISTS.journalists)
  const [options, setOptions] = useState<any[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState({ image: '', value: '' })

  const [currentJournoIndex, setCurrentJournoIndex] = useState({
    cellWeightX: 1,
    cellWeightY: 1,
    index: 15,
  })

  useEffect(() => {
    if (journalists.length) {
      setOptions(
        journalists.map((journo) => ({
          value: journo.name,
          label: journo.name,
          image: journo.imageURL,
          journalistId: journo.id,
        }))
      )
    }
  }, [journalists])

  const resetCurrentJournoIndex = () => {
    setCurrentJournoIndex({
      cellWeightX: -3,
      cellWeightY: 3,
      index: 0,
    })
  }

  const clearCurrentJournalistSelection = () => {
    setSelectedOption({ image: '', value: '' })
  }

  // Handle journalist vote submission
  const handleSubmit = async () => {
    setIsSubmitting(true)

    if (!member) {
      // If the user has not logged in, redirect him to the login/signup page
    }

    if (!selectedOption) {
      console.error('No Journalist selected')
      setIsSubmitting(false)

      return
    }

    try {
      const submission = 'submit data via POST request'

      console.log({ submission })
      setIsSubmitting(false)

      // Navigate to confirm page
      return submission
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='full-width-with-padding'>
      <section className='main-section'>
        <h1 className='title'>Journalism Spectrum Edit</h1>
        <p className='description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque et
          nobis delectus, aut quos, dolorum adipisci maxime expedita laborum
          obcaecati sequi est alias vel sapiente modi quas nostrum. Ab.
        </p>
      </section>
      <section className='sub-section'>
        <div className='choose-sub-section'>
          <p>
            Choose a journalist and place on the grid where you think they fall
            on the spectrum:
          </p>
          <div className='select-menu'>
            {selectedOption ? (
              <div
                className='select-menu-selection'
                onClick={() => setIsSelectOpen((state) => !state)}
              >
                <img
                  src={selectedOption.image}
                  alt={selectedOption.value}
                  className='select-menu-selection-image'
                  loading='eager'
                />
                <p>{selectedOption.value}</p>
                {isSelectOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            ) : (
              <div
                className='select-menu-selection'
                onClick={() => setIsSelectOpen((state) => !state)}
              >
                <p className='placeholder'>Choose a journalist...</p>
                {isSelectOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            )}
            {isSelectOpen && (
              <div className='select-menu-options'>
                {options.map((option, i) => {
                  return (
                    <div
                      key={i}
                      className='select-menu-option'
                      onClick={() => {
                        setSelectedOption(option)
                        setIsSelectOpen(false)
                      }}
                    >
                      <img
                        src={option.image}
                        alt={option.value}
                        className='select-menu-options-image'
                        loading='eager'
                      />
                      <p>{option.value}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className='sub-section'>
        <Spectrum
          selectedJournalist={selectedOption}
          clearCurrentJournalistSelection={clearCurrentJournalistSelection}
          currentJournoIndex={currentJournoIndex}
          setCurrentJournoIndex={setCurrentJournoIndex}
          resetCurrentJournoIndex={resetCurrentJournoIndex}
        />
        <div className='btn-wrapper '>
          {/* <Link
            className={`try-btn ctav ${isSubmitting ? 'btn-disabled' : ''}`}
            // onClick={handleSubmit}
            to='/confirm'
          >
            {isSubmitting ? 'Please wait...' : 'Submit'}
          </Link> */}
          <button onClick={(val) => props.onClick(2)} className='ctav'>
            Proceed to vote <i className='fa fa-arrow-right'></i>
          </button>
        </div>
      </section>
      <section className='sub-section'>
        <h2 className='sub-title'>Journalism spectrum project - Legend</h2>
        <div className='legend-sub-section'>
          <div className='legend-div'>
            <h4>Social Spectrum Scale</h4>
            <p>
              <b>Totalitarian:</b> Proponents of giving unlimited power to the
              state to control virtually all aspects of public and private life
              such as the attitudes, morals, and beliefs of the people.
            </p>
            <p>
              <b>Authoritarian:</b> Authoritarians characterize an ideal society
              as one governed by a strong central government that allows people
              a limited degree of political freedom. However, the political
              process, as well as all individual freedom, is controlled by the
              government without any constitutional accountability.
            </p>
            <p>
              <b>Statist:</b> Statism is the doctrine that the political
              authority of the state is legitimate to a certain degree, and
              hence the government negotiably owns and controls most of a
              country’s affairs.
            </p>
            <p>
              <b>Liberalism:</b> Liberals view the society as one governed
              largely by individual choices with minimal government
              intervention.
            </p>
            <p>
              <b>Libertarianism:</b> Libertarians aspire for society to be one
              governed by individuals who are free to make their economic and
              social decisions, without any government intervention.
            </p>
            <p>
              <b>Anarchism:</b> Anarchists are skeptical of authority and see
              the society as one where the government is unnecessary and
              unrequired. Hence, they strive for the abolition of the government
              and control of the society by the society at large without any
              hierarchy.
            </p>
          </div>
          <div className='legend-div'>
            <h4>Political Scale</h4>
            <p>
              <b>Communism:</b> Communism is a social and political ideology
              that strives to create a classless society in which all property
              and wealth are communally-owned by the society at large, instead
              of by individuals.
            </p>
            <p>
              <b>Socialism:</b> Socialists view an ideal society as one where
              even though the government owns the means of production, people
              are compensated based on their level of individual contribution to
              the economy.
            </p>
            <p>
              <b>Welfarism:</b> Welfarists view an ideal society as one where
              the government is just committed to ensuring that basic economic
              security is provided to its citizens.
            </p>
            <p>
              <b>Regulationist:</b> Regulationists view an ideal society as one
              where private individuals are allowed to own property and wealth
              but with restrictions and regulation.
            </p>
            <p>
              <b>Capitalist:</b> Capitalists view an ideal society as one where
              the means of production are owned by private individuals and they
              operate for profit with minimal government intervention.
            </p>
            <p>
              <b>Laissez Faire:</b> Proponents of Laissez-faire view the society
              as one where transactions between private groups of people are
              free from any form of economic interventionism by the government
              or authorities.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export { JournalismSpectrumEdit }
