import React from "react";
import "./props.css";

const Props = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>string/node</td>
            <td>null</td>
            <td>Title of the notification (ignore if component is message)</td>
          </tr>
          <tr>
            <td>description</td>
            <td>string/node</td>
            <td>null</td>
            <td>description of the notification</td>
          </tr>
          <tr>
            <td>type</td>
            <td> string</td>
            <td>notification</td>
            <td>
              determines if the type of component that is going to be rendered;
              allowed values: "notification", "message"
            </td>
          </tr>
          <tr>
            <td>position</td>
            <td>string</td>
            <td>topLeft</td>
            <td>
              determines the position of the component; allowed values:
              "topLeft", "bottomLeft", "topRight", "bottomRight"
            </td>
          </tr>
          <tr>
            <td>onNotificationClose</td>
            <td>func</td>
            <td>null</td>
            <td>Callback on closing the component</td>
          </tr>
          <tr>
            <td>onNotificationClick</td>
            <td>func</td>
            <td>null</td>
            <td>Callback on clicking the component</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>null</td>
            <td>
              String that determines user defined className for the component
            </td>
          </tr>
          <tr>
            <td>width</td>
            <td>number</td>
            <td>null</td>
            <td>Number that determines the width of the component</td>
          </tr>
          <tr>
            <td>notificationId</td>
            <td>string</td>
            <td>Randomly Generated</td>
            <td>Id of the notification component in question.</td>
          </tr>
          <tr>
            <td>containerId</td>
            <td>string</td>
            <td>Randomly Generated</td>
            <td>
              The id of the component over which the notification component
              needs to be mounted
            </td>
          </tr>
          <tr>
            <td>closeIcon</td>
            <td>string</td>
            <td></td>
            <td>Path to the close icon rendered in the component</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Props;
