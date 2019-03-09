import Vasern from 'vasern';

const VasernDB = new Vasern({
  schemas: [{
    name: 'DiaryEntry',
    props: { title: 'string', date: 'string', description: 'string' },
  }],
});

export default VasernDB;
