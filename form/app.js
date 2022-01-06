function getVal(){
    let uI = document.getElementById('username-input');
    let uIT = false;
    let eH = document.getElementById('email-handler-input');
    let eHT = false;
    let sH = document.getElementById('server-input');
    let sHT = false;
    let iM = document.getElementById('image-input');
    let iMT = false;
    let cI = document.getElementById('college-input');
    let cIT = false;
    let sW = document.getElementById('conditions-input');
    let sWT = false;
    let y=0;
    if(uI.value.length === 0){uIT=false;}
    else{uIT=true; y=y+100/6;}
    if(eH.value.length === 0){eHT=false;}
    else{eHT=true;y=y+100/6;}
    if(sH.value.length === 0){sHT=false;}
    else{sHT=true;y=y+100/6}
    if(iM.value.length === 0){iMT=false;}
    else{iMT=true;y=y+100/6}
    if(cI.value.length === 0){cIT=false;}
    else{cIT=true;y=y+100/6}
    if(sW.checked === false){sWT=false;}
    else{sWT=true;y=y+100/6}
    document.getElementById("progress-bar-new").style.width=y+'%';
    if(uIT==true && eHT==true && sHT==true&&iMT==true&&cIT==true&&sWT==true){
    document.getElementById("submit-button").disabled=false;
    }
    else{
      document.getElementById("submit-button").disabled=true;
    }
  }