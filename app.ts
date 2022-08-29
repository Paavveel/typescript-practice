const fetchWithAuth = (url: string, method: 'post' | 'get'): 1 | -1 => {
  return 1;
};

let method = 'post';

fetchWithAuth('s', method as 'post');
