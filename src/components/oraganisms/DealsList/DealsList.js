import DealsListItem from 'components/molecules/DealsListItem/DealsListItem'
import React from 'react'
import { Wrapper } from './DealsList.style'
const mockData = [
  {
    title: 'Theatre of War 2 Africa 1943',
    price_new: 7.98,
    price_old: 17.74,
    price_cut: 55,

    expiry: 1571068800,
    shop: {
      id: 'amazonus',
      name: 'Amazon',
    },

    urls: {
      buy:
        'http://www.amazon.com/Theatre-War-Africa-1943-Download/dp/B004QO9UUM/ref=sr_1_4163_twi_sof_1/185-4887647-7992563?s=videogames-download&ie=UTF8&qid=1458442018&sr=1-4163&refinements=p_n_availability%3A1238047011%2Cp_n_operating_system_browse-bin%3A2346238011%2Cp_n_condition-type%3A2224366011%2Cp_36%3A-700&tag=isthcom0a-20',
      game: 'https://isthereanydeal.com/#/page:game/info?plain=theatreofwariiafricaiixiviii',
    },
  },
  {
    title: 'Might & Magic Heroes VII Deluxe Edition',
    price_new: 56.99,
    price_old: 59.99,
    price_cut: 5,
    added: 1458441819,
    expiry: 0,
    shop: {
      id: 'dlgamer',
      name: 'DLGamer',
    },
    drm: ['uplay'],
    urls: {
      buy: 'http://www.dlgamer.eu/download-might-magic-heroes-7-deluxe--pc_games-p-29359.html?affil=3429886050',
      game: 'https://isthereanydeal.com/#/page:game/info?plain=mightandmagicheroesviideluxeedition',
    },
  },
]

const DealsList = () => {
  return (
    <Wrapper>
      {mockData.map((mockData) => (
        <DealsListItem data={mockData} key={mockData.title} />
      ))}
    </Wrapper>
  )
}

export default DealsList
