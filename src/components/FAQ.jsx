import { useState } from 'react'
import styles from './FAQ.module.css'

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => (
        <div key={i} className={`${styles.faqItem} ${openIndex === i ? styles.open : ''} r`}>
          <button
            className={styles.faqQ}
            aria-expanded={openIndex === i}
            onClick={() => toggle(i)}
          >
            {item.question}
          </button>
          <div className={styles.faqA}>
            <div className={styles.faqAIn}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
