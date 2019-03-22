import * as React from 'react';
import './ClimbingList.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="all">
        <div className="caption">
          <p className="caption_text">Главная</p>
        </div>
        <div className="contain">
          <p>Сейчас на скалодроме:</p>
          <div id="list">
            <table>
              <tr>
                <td>
                  {/* iterates clients*/}
                  {/*<a href="/exit?clientId=${client.clientId?c}">${client.firstName} ${client.lastName}</a><br></br>*/}
                  {/*end*/}
                </td>
              </tr>
            </table>
          </div>
          {/*<div id="sum">Всего ${count}</div>*/}
          <div className="grayline"></div>
          <div className="search-container">
            <div className="ui-widget">
              <input type="text" className="info" id="search" name="search" className="search"
                     placeholder="Введите ФИО"></input>
            </div>
          </div>
          <button id="button" className="push" type="button" disabled>Оформить</button>
          <button id="button2" className="push" type="button" onclick="javascript:window.location='/addUser'">
            Зарегистрировать
          </button>
          <button className="push" type="button" onclick="javascript:window.location='/GetStatisticController'">
            Статистика
          </button>
        </div>
      </div>
  );
  }
  }

  export default App;
