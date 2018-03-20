
const MODAL_SHOW = 'modal/MODAL_SHOW';
const MODAL_HIDE = 'modal/MODAL_HIDE';

export const modal_show = () => ({ type: MODAL_SHOW });
export const modal_hide = () => ({ type: MODAL_HIDE });

const initialState = {
  visible: false
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case MODAL_SHOW:
      return { visible: true };
    case MODAL_HIDE:
      return { visible: false };
    default:
      return state;
  }
}