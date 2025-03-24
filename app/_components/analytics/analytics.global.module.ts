import ReactGA from 'react-ga';

// Analytics

// Input your tracking ID here
ReactGA.initialize('G-X1VQH1NJQZ');

// Function to track page view
const trackPageView: () => void = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  // Send time and date of page view
  ReactGA.event({
    category: 'Page view',
    action: 'Page view',
    label: 'Page view',
    value: new Date().getTime()
  });
};

export default trackPageView;