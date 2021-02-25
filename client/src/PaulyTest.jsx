import React from 'react';
import Styles, { PaulyFooter, PaulySectionContainer, PaulyColContainer, PaulyCol, PaulyHfoot, PaulyUfoot, PaulyLfoot, PaulyFooterDesc, PaulyFooterSection, PaulySocialContainer, PaulyEnglish, PaulyFooterImg } from './Styles.js';

const PaulyTest = () => {
  return (
    <div>
    <PaulyFooter>
      <PaulySectionContainer>
        <PaulyColContainer>
          <PaulyCol>
            <PaulyHfoot>About</PaulyHfoot>
            <PaulyUfoot>
              <PaulyLfoot>How Airbnb works</PaulyLfoot>
              <PaulyLfoot>Newsroom</PaulyLfoot>
              <PaulyLfoot>Investors</PaulyLfoot>
              <PaulyLfoot>Airbnb Plus</PaulyLfoot>
              <PaulyLfoot>Airbnb Luxe</PaulyLfoot>
              <PaulyLfoot>HotelTonight</PaulyLfoot>
              <PaulyLfoot>Airbnb for Work</PaulyLfoot>
              <PaulyLfoot>Olympics</PaulyLfoot>
              <PaulyLfoot>Careers</PaulyLfoot>
            </PaulyUfoot>
          </PaulyCol>
          <PaulyCol>
            <PaulyHfoot>Community</PaulyHfoot>
            <PaulyUfoot>
              <PaulyLfoot>Diversity & Belonging</PaulyLfoot>
              <PaulyLfoot>Against Discrimination</PaulyLfoot>
              <PaulyLfoot>Accessibility</PaulyLfoot>
              <PaulyLfoot>Airbnb Associates</PaulyLfoot>
              <PaulyLfoot>Frontline Stays</PaulyLfoot>
              <PaulyLfoot>Invite friends</PaulyLfoot>
              <PaulyLfoot>Gift cards</PaulyLfoot>
              <PaulyLfoot>Airbnb.org</PaulyLfoot>
            </PaulyUfoot>
          </PaulyCol>
          <PaulyCol>
            <PaulyHfoot>Host</PaulyHfoot>
            <PaulyUfoot>
              <PaulyLfoot>Host your home</PaulyLfoot>
              <PaulyLfoot>Host an Online Experience</PaulyLfoot>
              <PaulyLfoot>Host an Experience</PaulyLfoot>
              <PaulyLfoot>Responsible hosting</PaulyLfoot>
              <PaulyLfoot>Resource Center</PaulyLfoot>
              <PaulyLfoot>Community Center</PaulyLfoot>
            </PaulyUfoot>
          </PaulyCol>
          <PaulyCol>
            <PaulyHfoot>Support</PaulyHfoot>
            <PaulyUfoot>
              <PaulyLfoot>Our COVID-19 Response</PaulyLfoot>
              <PaulyLfoot>Help Center</PaulyLfoot>
              <PaulyLfoot>Cancellation options</PaulyLfoot>
              <PaulyLfoot>Neighborhood Support</PaulyLfoot>
              <PaulyLfoot>Trust & Safety</PaulyLfoot>
            </PaulyUfoot>
          </PaulyCol>
          </PaulyColContainer>
        </PaulySectionContainer>
        <PaulyFooterDesc>
          <PaulyFooterSection>
             <div>
                <div>&copy; Airbnb, Inc. All rights reserved &middot; Privacy &middot; Terms &middot; Sitemap</div>
              </div>
             <PaulySocialContainer>
              <PaulyEnglish>
                <PaulyFooterImg style={{'margin-right':'10px'}} class="footerIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/world.svg"></PaulyFooterImg>
                <div style={{'margin-right':'24px'}}>English(US)</div>
                <div style={{'margin-right':'24px'}}>$ USD</div>
                <PaulyFooterImg style={{'margin-right':'24px'}} class="footerIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/facebook.svg"></PaulyFooterImg>
                <PaulyFooterImg style={{'margin-right':'24px'}} class="footerIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/twitter.svg"></PaulyFooterImg>
                <PaulyFooterImg style={{'margin-right':'24px'}} class="footerIMG" src="https://entirehouse-img.s3-us-west-1.amazonaws.com/instagram.svg"></PaulyFooterImg>
              </PaulyEnglish>
            </PaulySocialContainer>
         </PaulyFooterSection>
        </PaulyFooterDesc>
      </PaulyFooter>
  </div>
  )
}

export default PaulyTest;