import React from "react";

const Achievements = () => {
  return (
    <div className="bg-gray-200 flex gap-6 flex-col p-4 pt-8 pb-8">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="mb-2 text-xl font-semibold text-gray-800">
            Let’s Talk Numbers!
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs">
            At TekRevol, we believe in quantifiable success. We're not just
            promising; we're delivering.
          </p>
          <p className="text-xs">
            Our track record speaks volumes. With a proven history of successful
            web development projects, we bring a wealth of experience to the
            table.
          </p>
          <button className="p-2 text-sm text-center bg-primary w-32  text-white rounded">
            LET'S TALK
          </button>
        </div>
      </div>
      <div>
        <div>
          <h1>180+</h1>
          <p>Successful Projects</p>
        </div>
        <div>
          <h1>1st</h1>
          <p>
            Among Top Web Developers by
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAdCAYAAABcz8ldAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCMUI3RjIxQTZDMDExRUU5RDVCREU4ODk2QkE4NzNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCMUI3RjIyQTZDMDExRUU5RDVCREU4ODk2QkE4NzNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0IxQjdGMUZBNkMwMTFFRTlENUJERTg4OTZCQTg3M0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0IxQjdGMjBBNkMwMTFFRTlENUJERTg4OTZCQTg3M0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zrq/FAAAb1klEQVR42pxaCXxU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"
              alt=""
            />
          </p>
        </div>
        <div>
          <h1>4.9</h1>
          <p>
            Average Review Rating on
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAdCAYAAABcz8ldAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCMUI3RjIxQTZDMDExRUU5RDVCREU4ODk2QkE4NzNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCMUI3RjIyQTZDMDExRUU5RDVCREU4ODk2QkE4NzNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0IxQjdGMUZBNkMwMTFFRTlENUJERTg4OTZCQTg3M0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0IxQjdGMjBBNkMwMTFFRTlENUJERTg4OTZCQTg3M0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zrq/FAAAb1klEQVR42pxaCXxU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"
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
