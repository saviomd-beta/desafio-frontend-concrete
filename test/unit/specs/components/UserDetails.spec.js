import Vue from 'vue';
import UserDetails from '@/components/UserDetails';

describe('UserDetails.vue', () => {
  it('has correct title value', () => {
    const Constructor = Vue.extend(UserDetails);
    const vm = new Constructor({
      propsData: {
        login: 'saviomd',
      },
    }).$mount();
    expect(vm.$el.querySelector('.title').textContent)
      .toEqual('saviomd');
  });
});
