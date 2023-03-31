import React from 'react';
import './profile.scss';

export default function Profile() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profile</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/`}
          />
        </div>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
      </div>
    </React.Fragment>
  );
}
