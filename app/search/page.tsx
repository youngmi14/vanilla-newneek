'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchWord from './components/SearchWord/SearchWord';
import SearchIcon from '@/public/svg/Search';
import { root } from '@/styles/globalTheme.css';
import * as styles from './page.css';

const Search = () => {
  const [recentWord, setRecentWord] = useState<string[] | null>(null);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("search-history");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (parsedData?.state?.searches) {
          setRecentWord(parsedData.state.searches);
        }
      } catch (error) {
        console.error("로컬스토리지 error", error);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handlekeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 페이지 리로드 방지
      if (inputValue.length === 0) return;
      searchWord();
    }
  }

  const searchWord = () => {
    console.log('검색어 : ', inputValue);
    // localStorage에 추가하기
    const storedData = localStorage.getItem('search-history');

    // 예외처리
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (parsedData?.state?.searches) {
          parsedData.state.searches.unshift(inputValue);

          localStorage.setItem("search-history", JSON.stringify(parsedData));
          console.log('로컬스토리지 : ', parsedData);
        }
      } catch (error) {
        console.log('catch에러 ', error)
      }
    } else {
      console.log('search-history라는 로컬스토리지 키 없음')
    }

    // 페이지 이동하기
    console.log('페이지이동했다고 치기! --> ', `/search/${inputValue}`)
    router.push(`/search/${inputValue}`)
  }

  /** 최근검색어 전체 삭제 */
  const clearSearchHistory = () => {
    const newSearchHistory = {
      state: { searches: [] },
      version: 0,
    };

    localStorage.setItem('search-history', JSON.stringify(newSearchHistory));

    setRecentWord([]);
  }

  return (
    <main className={styles.main}>
      <div className={styles.search}>
        <form className={styles.form}>
          <div className={styles.searchWrap}>
            <input
              type='text'
              value={inputValue}
              className={styles.input}
              onChange={handleInputChange}
              onKeyDown={handlekeyDown}
              placeholder='궁금한 지식과 뉴니커를 찾아보세요'
            />
            <div className={styles.searchIcon}>
              <SearchIcon
                width='20'
                height='20'
                color={root.color.grayscale.gray_600}
              />
            </div>
          </div>
        </form>
        <div className={styles.recentSearch}>
          <section className={styles.recentSection}>
            <div className={styles.recentTitle}>
              <h2 className={styles.titleText}>최근 검색어</h2>
              <button
                className={styles.deletBtn}
                onClick={clearSearchHistory}
              >전체 삭제</button>
            </div>
            <div className={styles.wordWrap}>
              {recentWord?.map((word, idx) =>
                <SearchWord key={idx} word={word} />  
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Search;