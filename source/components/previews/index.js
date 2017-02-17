import React, {Component} from 'react'
import styles from './style.css'
import PostAuthor from '../../components/postAuthor'
import PostDate from '../../components/postDate'
import Navigation from '../../components/navigation'
import Header from '../../components/header'
import testData from './testData/data'

export default class App extends Component {
  render() {
    return <div className={styles.body}>
      <Header/> 
      {testData.map((item, index) => {
        const {title, author, date, image, textPreview} = item
        return <div className={styles.preview} key={index}>
          <a href="/" className={styles.header}>{title}</a>
          <div className={styles.container}>
            <img className={styles.image} src={image} alt=""/>
            <div className={styles.content}>{textPreview}</div>
          </div>
          <div className={styles.date}>
            <PostDate date={date}/>
          </div>
          <div className={styles.author}>
            <PostAuthor author={author}/>
          </div>
        </div>
      })}
      <Navigation/>
    </div>
  }
}