function createDatas(query, totalCount, resName) {
  const { limit, offset } = query;
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

export default function getMockDatas(query, totalCount, resName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datas = createDatas(query, totalCount, resName);
      resolve(datas);
    }, 100);
  });
}