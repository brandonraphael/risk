var Hud = React.createClass({
  render: function(){
    return (
            <div>
              <h3>{this.props.playerName}</h3>
              <PlayerInfo/>
              <AttackerInfo/>
              <DefenderInfo/>
              <Actions/>
            </div>
        );
      }
 });

var PlayerInfo = React.createClass({
  render: function(){
    return (
      <table>
        <tr>
          <th>Player Information</th>
        </tr>
        <tr>
         <td>Total Units</td>
         <td>4</td>
        </tr>
        <tr>
         <td>Territories Owned</td>
         <td>2</td>
        </tr>
        <tr>
         <td>Continents Owned</td>
         <td>1</td>
        </tr>
      </table>

    );
  }
});

var AttackerInfo = React.createClass({
  render: function(){
    return (
      <div>
        <table>
          <tr>
            <th>Attacker Information</th>
          </tr>
          <tr>
           <td>Total Units</td>
           <td>4</td>
          </tr>
          <tr>
           <td>Territory attacking</td>
           <td>Scottsdale</td>
          </tr>
        </table>
      </div>
    );
  }
});

var DefenderInfo = React.createClass({
  render: function(){
    return (
      <div>
        <table>
          <tr>
            <th>Defender Information</th>
          </tr>
          <tr>
           <td>Total Units</td>
           <td>4</td>
          </tr>
          <tr>
           <td>Territory defending</td>
           <td>Scottdale</td>
          </tr>
        </table>
      </div>
    );
  }
});

var Actions = React.createClass({
  render: function(){
    return (
      <div>
        <button>Attack</button>
        <button>Next Phase</button>
      </div>
    );
  }
});




ReactDOM.render(<Hud playerName="playerName1"/>, document.getElementById('hud-entry-point'));
