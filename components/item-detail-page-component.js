export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const groupedSecondaryImpacts = Vue.computed(() => {
      const impacts = selectedItem.value?.secondaryImpacts || [];
      const groups = new Map();

      impacts.forEach((impact) => {
        if (!groups.has(impact.area)) {
          groups.set(impact.area, []);
        }
        groups.get(impact.area).push(impact);
      });

      return Array.from(groups, ([area, areaImpacts]) => ({ area, impacts: areaImpacts }));
    });

    return {
      itemsStore,
      selectedItem,
      groupedSecondaryImpacts,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <router-link to="/items" class="btn btn-link ps-0 mb-3">← Back to collection</router-link>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading item details...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
        Item not found.
      </div>

      <article v-else class="card shadow-sm border-0 overflow-hidden">
        <div class="card-body p-4">
          <h1 class="h3 mb-3">{{ selectedItem.name }}</h1>
          <p class="lead mb-0">{{ selectedItem.description || 'No summary available.' }}</p>

          <section class="mt-4" aria-labelledby="primary-benefit-heading">
            <h2 id="primary-benefit-heading" class="h5">Primary benefit</h2>
            <p class="mb-0">{{ selectedItem.primaryBenefit || 'No primary benefit available.' }}</p>
          </section>

          <section v-if="groupedSecondaryImpacts.length > 0" class="mt-4" aria-labelledby="secondary-impacts-heading">
            <h2 id="secondary-impacts-heading" class="h5">Secondary impacts</h2>
            <section v-for="group in groupedSecondaryImpacts" :key="group.area" class="mt-3" :aria-labelledby="'impact-area-' + group.area">
              <h3 :id="'impact-area-' + group.area" class="h6">{{ group.area }}</h3>
              <ul class="mb-0">
                <li v-for="impact in group.impacts" :key="impact.description">
                  {{ impact.description }}
                  <span class="badge bg-secondary ms-2">{{ impact.source }}</span>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </article>
    </section>
  `,
};
