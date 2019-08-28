import { Query } from '../../src/interface';
function createDatas(query: Query, totalCount: number, resName: string) {
  const { limit = 0, offset = 0 } = query;
  console.log('limit:', limit, 'offset:', offset, 'total:', totalCount);
  let rlt = [];
  if (offset <= totalCount) {
    const len = Math.min(limit, totalCount - offset);
    for (let i = 0; len - i > 0; i++) {
      rlt.push({ id: offset + i, name: `${resName}-${offset + i}` });
    }
  }
  return {
    response: {
      [`${resName}s`]: rlt,
      paging: {
        totalCount
      }
    },
  }
}

export default function getMockDatas(query: Query, totalCount: number, resName: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datas= createDatas(query, totalCount, resName);
      resolve(datas);
    }, 500);
  });
}