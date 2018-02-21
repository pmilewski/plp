const dummyClick = (event) => { event.preventDefault(); alert('You have clicked element!'); };
const mutedClick = (event) => { event.preventDefault(); event.stopPropagation(); };
const emptyFunction = () => false;
const EMPTY_HREF = 'javascript:;';

export { dummyClick, mutedClick, emptyFunction, EMPTY_HREF };
