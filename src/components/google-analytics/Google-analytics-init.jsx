import ReactGA from 'react-ga';

const googleAnalyticsAction = {};
googleAnalyticsAction.initGoogleAnalytics = async (key) =>
{
    ReactGA.initialize('UA-216352185-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}
export {googleAnalyticsAction}