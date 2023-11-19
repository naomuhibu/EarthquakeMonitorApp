interface vQuake {
  lat: number;
  lng: number;
  mmi: number;
  name: string;
}

interface QuakeViewProps {
  vquake: vQuake;
  onSelectView: () => void;
}

const QuakeView: React.FC<QuakeViewProps> = ({ vquake, onSelectView }) => {
  const handleClick = () => {
    onSelectView();
  };

  return (
    <>
      <div
        className="card rounded position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
        style={{ width: "18rem" }}
        onClick={() => {
          handleClick();
        }}
      >
        <div className="card-body">
          <h3 className="card-title">Quake Information</h3>
          {/* View quake data */}
          <table>
            <tbody>
              <tr>
                <th>Latitude</th>
                <td>{vquake.lat}</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>{vquake.lng}</td>
              </tr>
              <tr>
                <th>MMI</th>
                <td>{vquake.mmi}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{vquake.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default QuakeView;
