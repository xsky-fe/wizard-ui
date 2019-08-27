function createDatas(query: { limit: number, offset: number }, totalCount: number, resName: string) {
  const { limit, offset } = query;
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

export default function getMockDatas(query: { limit: number, offset: number }, totalCount: number, resName: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datas= createDatas(query, totalCount, resName);
      resolve(datas);
    }, 500);
  });
}