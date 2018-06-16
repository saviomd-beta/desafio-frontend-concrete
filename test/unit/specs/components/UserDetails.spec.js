import Vue from 'vue';
import UserDetails from '@/components/UserDetails';

describe('UserDetails.vue', () => {
  it('has a mounted hook', () => {
    expect(typeof UserDetails.mounted).toBe('function')
  })

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

  it('has correct value for avatar image alt attribute', () => {
    const Constructor = Vue.extend(UserDetails);
    const vm = new Constructor({
      propsData: {
        login: 'saviomd',
      },
    }).$mount();
    expect(vm.imgAvatarAlt)
      .toEqual('saviomd avatar');
  });

});
