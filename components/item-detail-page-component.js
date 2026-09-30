export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    return {
      itemsStore,
      selectedItem,
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

          <section v-if="selectedItem.secondaryImpacts && selectedItem.secondaryImpacts.length > 0" class="mt-4" aria-labelledby="secondary-impacts-heading">
            <h2 id="secondary-impacts-heading" class="h5">Secondary impacts</h2>
            <ul class="mb-0">
              <li v-for="impact in selectedItem.secondaryImpacts" :key="impact.description">
                {{ impact.description }}
              </li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  `,
};
