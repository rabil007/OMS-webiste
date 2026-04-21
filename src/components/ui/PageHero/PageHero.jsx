import styles from './PageHero.module.css'

export function PageHero({ eyebrow, title, subtitle, image, imageSet, imageSizes }) {
  return (
    <div className={styles.hero}>
      {image && (
        <img
          src={image}
          srcSet={imageSet}
          sizes={imageSizes}
          alt=""
          className={styles.bg}
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
        />
      )}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            {eyebrow && (
              <div className={styles.eyebrow}>
                <span className={styles.dot} />
                {eyebrow}
              </div>
            )}
            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

