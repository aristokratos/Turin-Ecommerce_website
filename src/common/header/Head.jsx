import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +234 8134 5678</label>
            <i className='fa fa-envelope'></i>
            <label> support@email.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>NIG</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
