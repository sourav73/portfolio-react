const WorkItem = (props) => {
  const { allCategory, imageSrc, imageAlt, usedTechnology, sourceUrl, demoUrl } = props;
  return (
    // <div className="col-sm-6 col-md-4">
    <div className={`work-item ${allCategory}`}>
      <img src={imageSrc} alt={imageAlt} />
      <div className="work-item-overlay">
        <div className="overlay-content">
          <h3>Website <a href={demoUrl} rel="noreferrer" target="_blank">Live View</a></h3>
          <span></span>
          <p className="mb-1">{usedTechnology}</p>
          <p className="mb-0"><a href={sourceUrl} rel="noreferrer" target="_blank">View Source</a></p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default WorkItem;