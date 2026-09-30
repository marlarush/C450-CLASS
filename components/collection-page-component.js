export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');

    return {
      itemsStore,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h3 mb-0">Proposed Decisions</h1>
        <span class="badge text-bg-light border">{{ itemsStore.items.length }} decisions</span>
      </div>

      <p class="text-muted">Review the proposed business decisions.</p>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading decisions...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="itemsStore.items.length === 0" class="alert alert-warning" role="alert">
        No proposed decisions found.
      </div>

      <div v-else class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in itemsStore.items" :key="item.id">
          <router-link :to="'/items/' + item.id" class="text-decoration-none text-reset">
            <article class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="small text-muted mb-2">Proposed decision</p>
                <h2 class="h5 card-title">{{ item.name }}</h2>
                <p class="card-text mb-0">{{ item.description || 'No summary available.' }}</p>
              </div>
            </article>
          </router-link>
        </div>
      </div>
    </section>
  `,
};
