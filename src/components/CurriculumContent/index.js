import React, { useState } from 'react';
import styles from './styles.module.scss';
import Curriculum from '../../assets/json/curriculum.json';

import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';

// handleChange = e => {
//   this.props.setFilteredData(e.target.value);
// };

const CurriculumContent = () => {
  // const[selectValue,filterData]=useState('')
  const [collegeopen, setCollegeopen] = useState(false);
  const [mastergeopen, setMasteropen] = useState(false);
  const [inservicegeopen, setInserviceopen] = useState(false);

  const [pdfurl, setPdfurl] = useState(0);

  // const handleCollegeopen = () => {
  //   setCollegeopen(!collegeopen);
  // };

  // const handleMasteropen = () => {
  //   setMasteropen(!mastergeopen);
  // };

  // const handleInserviceopen = () => {
  //   setInserviceopen(!inservicegeopen);
  // };

  return (
    <div className={styles.container}>
      {/* 電腦與平板左邊欄 */}
      
      <div className={styles.titleFrame}>
        
          <div className={styles.titleBar}>大學部</div>
          
          <div className={styles.docsBar}>
          {Curriculum.map((group) =>
            group.grouptitle === '大學部' && (
            <div key={group.id} className={styles.docsBar_docsBox}>
                <Link className={styles.docsBar_docsBox__remarks} onClick={() => setPdfurl(group.id)}>
                {group.listtitle}{group.id}
                </Link>
            </div>
             )
          )}
            {/* <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                110學年度下學期
              </Link>
            </div>
            <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                111學年度上學期
              </Link>
            </div>
            <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                111學年度下學期
              </Link>
            </div> */}
          </div>


          
          <div className={styles.titleBar}>碩士班</div>
          <div className={styles.docsBar}>
          {Curriculum.map((group) =>
            group.grouptitle === '碩士班' && (
            <div key={group.id} className={styles.docsBar_docsBox}>
                <Link className={styles.docsBar_docsBox__remarks}>
                {group.listtitle}{group.id}
                </Link>
            </div>
              )
            )}

            {/* <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                110學年度下學期
              </Link>
            </div>
            <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                111學年度上學期
              </Link>
            </div>
            <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                111學年度下學期
              </Link>
            </div> */}

        </div>

          <div className={styles.titleBar}>在職碩士班</div>
          <div className={styles.docsBar}>
          {Curriculum.map((group) =>
            group.grouptitle === '在職碩士班' && (
            <div key={group.id} className={styles.docsBar_docsBox}>
                <Link className={styles.docsBar_docsBox__remarks}>
                {group.listtitle}{group.id}
                </Link>
            </div>
            )
          )}

            {/* <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                110學年度下學期
              </Link>
            </div>
            <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                111學年度上學期
              </Link>
            </div>
            <div className={styles.docsBar_docsBox}>
              <Link className={styles.docsBar_docsBox__remarks}>
                111學年度下學期
              </Link>
            </div> */}
          </div>
      </div>
      

      {/* 手機 Dropdowns onClick={handleCollegeopen} */}
      {/* onClick={() => { setLikeopen(false); setCommentopen(!commentopen);}} */}

      <div className={styles.dropdownMenu}>
        <div className={styles.nav_dropdownMenu}>
          <div className={styles.dropdown_button} 
               onClick={() => { setCollegeopen(!collegeopen);setMasteropen(false); setInserviceopen(false);}} 
               type="button">大學部

            <div className={styles.toggle}>
              <div className="dropdown-toggle"></div>
            </div>
          </div>
          {/* <div className={styles.dropdown_button} onClick={handleOpen} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </div> */}
          {collegeopen ? (
                    <div className={styles.dropdown_item}>
                    <div className={styles.docsBar}>
                    {Curriculum.map((group) =>
                      group.grouptitle === '大學部' && (
                      <div key={group.id} className={styles.docsBar_docsBox}>
                          <Link className={styles.docsBar_docsBox__remarks}>
                          {group.listtitle}{group.id}
                          </Link>
                      </div>
                      )
                    )}

                    {/* <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        110學年度下學期
                      </Link>
                    </div>
                    <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        111學年度上學期
                      </Link>
                    </div>
                    <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        111學年度下學期
                      </Link>
                    </div> */}
                  </div>
                  </div>
          ) : null}

        </div>

        <div className={styles.nav_dropdownMenu}>
          <div className={styles.dropdown_button} 
               onClick={() => { setMasteropen(!mastergeopen);setCollegeopen(false); setInserviceopen(false);}} 
               type="button">碩士班

          <div className={styles.toggle}>
            <div className="dropdown-toggle"></div>
            </div>
          </div>
          {/* <div className={styles.dropdown_button} onClick={handleOpen} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </div> */}
          {mastergeopen ? (
                    <div className={styles.dropdown_item}>
                    <div className={styles.docsBar}>
                    {Curriculum.map((group) =>
                      group.grouptitle === '碩士班' && (
                      <div key={group.id} className={styles.docsBar_docsBox}>
                          <Link className={styles.docsBar_docsBox__remarks}>
                          {group.listtitle}{group.id}
                          </Link>
                      </div>
                      )
                    )}

                    {/* <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        110學年度下學期
                      </Link>
                    </div>
                    <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        111學年度上學期
                      </Link>
                    </div>
                    <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        111學年度下學期
                      </Link>
                    </div> */}
                  </div>
                  </div>
          ) : null}

        </div>

        <div className={styles.nav_dropdownMenu}>
          <div className={styles.dropdown_button} 
               onClick={() => { setInserviceopen(!inservicegeopen);setMasteropen(false);setCollegeopen(false); }} 
               type="button">在職碩士班

          <div className={styles.toggle}>
            <div className="dropdown-toggle"></div>
            </div>
          </div>
          {/* <div className={styles.dropdown_button} onClick={handleOpen} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </div> */}
          {inservicegeopen ? (
                    <div className={styles.dropdown_item}>
                    <div className={styles.docsBar}>
                    {Curriculum.map((group) =>
                      group.grouptitle === '在職碩士班' && (
                      <div key={group.id} className={styles.docsBar_docsBox}>
                          <Link className={styles.docsBar_docsBox__remarks}>
                          {group.listtitle}{group.id}
                          </Link>
                      </div>
                      )
                    )}

                    {/* <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        110學年度下學期
                      </Link>
                    </div>
                    <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        111學年度上學期
                      </Link>
                    </div>
                    <div className={styles.docsBar_docsBox}>
                      <Link className={styles.docsBar_docsBox__remarks}>
                        111學年度下學期
                      </Link>
                    </div> */}
                  </div>
                  </div>
          ) : null}

        </div>
      </div>

      {/* 課表連結 */}
      <div className={styles.fileFrame}>
      {Curriculum.map((group) =>
            group.id === pdfurl && (
              <iframe className={styles.iframe} loading="lazy" title="curriculum" src={group.pdfUrl} allow="autoplay"></iframe>
              )
            )}

        {/* <iframe className={styles.iframe} loading="lazy" title="curriculum" src="https://drive.google.com/file/d/1gTeC0o3JOjBxSO1cE1KClD9zoL3x56X6/preview" allow="autoplay"></iframe> */}
      </div>


    </div>

    
  );
};

export default CurriculumContent;


