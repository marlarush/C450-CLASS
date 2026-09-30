import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';

export const placeholderDecisionData = [
  {
    id: 'remote-work-expansion',
    title: 'Remote Work Expansion',
    summary: 'Expand hybrid work options to improve hiring and flexibility.',
    primaryBenefit: 'The company can attract and retain employees while reducing commute-related stress.',
    secondaryImpacts: [
      {
        area: 'Employees',
        description: 'Staff report better work-life balance and more flexibility for personal responsibilities.',
        source: 'Documented',
        direction: 'Positive',
      },
      {
        area: 'Operations',
        description: 'Team coordination may become harder without regular in-person check-ins.',
        source: 'Assumption/Estimate',
        direction: 'Negative',
      },
      {
        area: 'Costs',
        description: 'Office-related costs may decrease if fewer people use on-site space each week.',
        source: 'Documented',
        direction: 'Positive',
      },
    ],
  },
  {
    id: 'customer-support-ai',
    title: 'AI Customer Support Pilot',
    summary: 'Pilot an AI assistant to help answer routine customer questions.',
    primaryBenefit: 'Support teams can respond faster to simple requests while freeing staff for higher-value issues.',
    secondaryImpacts: [
      {
        area: 'Customers',
        description: 'Customers may get quicker answers during busy hours and outside normal office times.',
        source: 'Assumption/Estimate',
        direction: 'Positive',
      },
      {
        area: 'Operations',
        description: 'The support workflow may need extra monitoring to maintain quality and resolve escalations.',
        source: 'Documented',
        direction: 'Negative',
      },
      {
        area: 'Costs',
        description: 'Initial setup costs may increase, but long-term handling time may fall for common requests.',
        source: 'Assumption/Estimate',
        direction: 'Positive',
      },
    ],
  },
];

const routes = [
  {
    path: '/',
    component: LandingPageComponent,
  },
  {
    path: '/about',
    component: AboutPageComponent,
  },
  {
    path: '/items',
    component: CollectionPageComponent,
  },
  {
    path: '/items/:id',
    component: ItemDetailPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  setup() {
    const itemsStore = Vue.reactive({
      items: [],
      isLoading: true,
      error: '',
    });

    fetch('items-template.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load CSV data file.');
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data, errors }) => {
            if (errors.length > 0) {
              itemsStore.error = 'There was a problem reading the CSV data.';
              itemsStore.items = [];
            } else {
              itemsStore.items = data.map((row) => ({
                id: String(row.id || '').trim(),
                name: String(row.name || '').trim(),
                description: String(row.description || '').trim(),
                category: String(row.category || '').trim(),
                imageUrl: String(row.image_url || '').trim(),
                location: String(row.location || '').trim(),
                primaryBenefit: String(row.primary_benefit || '').trim(),
                secondaryImpacts: placeholderDecisionData.find((decision) => decision.id === String(row.id || '').trim())?.secondaryImpacts || [],
              }));
              itemsStore.error = '';
            }
            itemsStore.isLoading = false;
          },
          error: () => {
            itemsStore.error = 'There was a problem parsing CSV data.';
            itemsStore.items = [];
            itemsStore.isLoading = false;
          },
        });
      })
      .catch(() => {
        itemsStore.error = 'There was a problem loading data.';
        itemsStore.items = [];
        itemsStore.isLoading = false;
      });

    Vue.provide('itemsStore', itemsStore);

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
