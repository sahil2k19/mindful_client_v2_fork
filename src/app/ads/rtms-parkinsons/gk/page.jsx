import React from 'react'
import Script from 'next/script';
import ParkinsonsLandingPage from '../component/ParkinsonsLandingPage'
import { headers } from 'next/headers';

export async function generateMetadata() {
  return {
    title: `rTMS for Parkinson's | MindfulTMS Neurocare — Delhi`,
    description: `rTMS for Parkinson's: safe, painless brain stimulation. MindfulTMS Neurocare, Greater Kailash, New Delhi. Request a free call.`,
    robots: "noindex, nofollow",
  };
}

const page = () => {
  const headersList = headers();
  const currentUrl = headersList.get('x-full-url') || '';
  const baseZohoForm = 'https://forms.zohopublic.in/nikhilmindf1/form/Form2025Delhi/formperma/gRVhhLpekwvSGqqK7AR5CbUIQRmCj0NeSZX862VPGwo';
  const zohoFormWithUrl = `${baseZohoForm}?from=landingpage&url=${encodeURIComponent(currentUrl)}&solution=rtms`;

  const data = {
    phone: `9606067372`,
    section2Img: '/ads/rtms/chairImg.jpg',
    zohoForm: zohoFormWithUrl
  };
  return (
    <>
      <Script id="zfadvlead-parkinsons-gk" strategy="afterInteractive">
        {`(function(){
  function ZFAdvLead(){}
  ZFAdvLead.utmPValObj = ZFAdvLead.utmPValObj || {};
  ZFAdvLead.utmPNameArr = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
  ZFAdvLead.utmcustPNameArr = [];
  ZFAdvLead.isSameDomian = false;

  ZFAdvLead.prototype.zfautm_sC = function(paramName, path, domain, secure) {
    var value = ZFAdvLead.utmPValObj[paramName];
    if (value != null) {
      var cookieStr = paramName + "=" + encodeURIComponent(value);
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + 7);
      cookieStr += "; expires=" + exdate.toGMTString();
      cookieStr += "; path=/";
      if (domain) cookieStr += "; domain=" + encodeURIComponent(domain);
      if (secure) cookieStr += "; secure";
      document.cookie = cookieStr;
    }
  };

  ZFAdvLead.prototype.zfautm_ini = function() {
    this.zfautm_bscPCap();
    var url_search = document.location.search;
    ZFAdvLead.utmcustPNameArr.forEach(function(n){
      var v = n === 'referrername' ? (document.URL||'').slice(0,1500)
                : this.zfautm_gP(url_search,n) || this.zfautm_gC(n);
      if(v) ZFAdvLead.utmPValObj[n] = v;
    }, this);
    for(var k in ZFAdvLead.utmPValObj) this.zfautm_sC(k);
  };

  ZFAdvLead.prototype.zfautm_bscPCap = function() {
    var t = this.zfautm_calcTrafSrc();
    ['source','medium','campaign','term','content'].forEach(function(f){
      if(t[f]!=='') ZFAdvLead.utmPValObj['utm_'+f] = t[f];
    });
  };

  ZFAdvLead.prototype.zfautm_calcTrafSrc = function() {
    return {source:'',medium:'',campaign:'',term:'',content:''};
  };

  ZFAdvLead.prototype.zfautm_gP = function(s,q) {
    var m = s.match('[?&]'+q+'=([^&]+)'); return m?decodeURIComponent(m[1]):'';
  };
  ZFAdvLead.prototype.zfautm_gC = function(n) {
    var arr = document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){ var p=arr[i].split('='); if(p[0]===n) return decodeURIComponent(p[1]); }
  };

  ZFAdvLead.prototype.zfautm_iframeSprt = function() {};
  ZFAdvLead.prototype.zfautm_DHtmlSprt = function() {};

  var inst = new ZFAdvLead();
  inst.zfautm_ini();
  window.addEventListener('load', function() {
    inst.zfautm_iframeSprt();
    inst.zfautm_DHtmlSprt();
  });
})();`}
      </Script>
      <ParkinsonsLandingPage data={data} />
    </>
  )
}

export default page
