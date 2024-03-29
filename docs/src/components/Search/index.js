import React from 'react';
import { Index } from 'elasticlunr';
import { Icon, InputGroup, FormControl } from 'wizard-ui';
import { Link } from 'gatsby';
import './style.scss';

const Search = props => {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const handleChange = React.useCallback(
    evt => {
      const value = evt.target.value;
      const index = Index.load(props.searchIndex);
      const rl = index
        .search(value, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => index.documentStore.getDoc(ref));
      setQuery(value);
      setResults(rl.filter(r => r.title));
    },
    [setQuery, setResults, props.searchIndex]
  );
  return (
    <div className="HeaderSearch">
      <InputGroup>
        <InputGroup.Text>
          <Icon type="search-fill" />
        </InputGroup.Text>
        <FormControl
          value={query}
          onChange={handleChange}
          placeholder="在 wizard ui 中搜索"
        />
      </InputGroup>
      {results.length > 0 && (
        <ul>
          {results.map(page => (
            <li key={page.id}>
              <Link to={page.path}>
                {page.title}
                {Boolean(page.author) && <span>{page.author}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
