import { defineModule } from 'direct-vuex';

import { localActionContext, localGetterContext } from '@/store';
import { Module } from '@/store/consts';

import mutations from './mutations';
import state from './state';
import getters from './getters';
import actions from './actions';

const soraCard = defineModule({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
});

const soraCardGetterContext = (args: [any, any, any, any]) => localGetterContext(args, Module.SoraCard, soraCard);
const soraCardActionContext = (context: any) => localActionContext(context, Module.SoraCard, soraCard);

export { soraCardActionContext, soraCardGetterContext };
export default soraCard;
