import React from 'react'
import './TileCard.scss'
import Button from '../Button/Button'

const TileCard = () => {
    return (
        <div className='tilecard section'>
                <div className='tilecard-container'>
                    <div className='tilecard-container-top'>
                        <img className='tilecard-banner-image' src='/images/bounteous-background.jpg' alt='Bounteous Background' />
                    </div>
                    <div className='tilecard-container-bottom'>
                        <img className='tilecard-logo'src='/images/bounteous-logo.png' alt='Bounteous Logo' />
                        <Button label={'Follow'}/>
                        <h1 className='tilecard-title'>Bounteous</h1>
                        <p className='tilecard-headline'>
                            Content, Commerce, and Coffee - <a href='/'> #AEM/CQ5</a>, <a href='/'> #Drupal</a>, <a href='/'> #Magento</a>, and <a href='/'> #UXDesign</a>
                        </p>
                        <p className='tilecard-desc'>North America & Europe · bounteous.com · Joined March 2009</p>
                    </div>
                </div>
        </div>
    )
}

export default TileCard
