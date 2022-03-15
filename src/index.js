
const date = new Date()
 const miedad = Number(date.getFullYear()) - 1989 
const año = document.getElementById("año")
año.textContent = miedad + ' años'


var ProgressBar = require('progressbar.js')
var bar = new ProgressBar.Line('#python', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 3400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '10px',
        padding: 0,
        margin: '5px',
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 90) + ' %');
    }
  });
  
  bar.animate(1.0);  

  var bar2 = new ProgressBar.Line('#java', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 3400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
       
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '10px',
        padding: 0,
        margin: '5px',
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar2) => {
      bar2.setText(Math.round(bar2.value() * 90) + ' %');
    }
  });
  
  bar2.animate(1.0);  

  var bar3 = new ProgressBar.Line('#c', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 3400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
       
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '10px',
        padding: 0,
        margin: '5px',
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar3) => {
      bar3.setText(Math.round(bar3.value() * 90) + ' %');
    }
  });
  
  bar3.animate(1.0);  

  var bar4 = new ProgressBar.Line('#angular', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 3400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '65%', height: '100%'},
    text: {
      style: {
  
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '10px',
        padding: 0,
        margin: '5px',
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar4) => {
      bar4.setText(Math.round(bar4.value() * 65) + ' %');
    }
  });
  
  bar4.animate(1.0);  

  var bar5 = new ProgressBar.Line('#react', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 3400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '70%', height: '100%'},
    text: {
      style: {

        color: '#999',
        position: 'absolute',
        right: '0',
        top: '10px',
        padding: 0,
        margin: '5px',
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar5) => {
      bar5.setText(Math.round(bar5.value() * 70) + ' %');
    }
  });
  
  bar5.animate(1.0);  

