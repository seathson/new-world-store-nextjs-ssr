import React, { useState } from 'react'
import { New } from './New'

export function News({}) {
  const content = [
    {
      id: 1,
      title: `Is it safe to use the services of the New World Store?`,
      text: `Yes, we guarantee that everything will be in order with your account and the service will be provided on time. We follow the rules and also follow the latest updates.`,
    },
    {
      id: 2,
      title: `How quickly will I receive the purchased service?`,
      text: `Our operator will contact you immediately after purchase. He will provide you with all the services you purchased. If you have a problem, please let us know.`,
    },
    {
      id: 3,
      title: `Why is New World Store the right place to buy?`,
      text: `A full lifetime warranty, 24/7 delivery and loyal prices make New World Store a great place to shop.`,
    },
    {
      id: 4,
      title: `Your prices in USD, but my currency is EUR or different`,
      text: `There is no problem, during the payment process currency conversion will occur automatically according to the exchange rate at the time of payment.`,
    },
    {
      id: 5,
      title: `I have more questions. How to contact us?`,
      text: `You can talk to the operator on the site at any time. Or contact us on social media. We are ready to answer and solve your problem 24/7.`,
    },
  ]
  return (
    <div className="news flex flex-wrap border-2">
      {content.map((item) => (
        <New
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  )
}
