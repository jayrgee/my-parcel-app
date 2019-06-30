// import an SCSS module
import classes from './main.scss';
import sum from './sum';

export default () => {
  console.log(classes.main);
  console.log(sum(1,2));
};
