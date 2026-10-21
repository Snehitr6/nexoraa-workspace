import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { chartData } from "../data/data";

export default function ChartCard({ embedded = false }) {
  const maxValue = useMemo(() => {
    return Math.max(
      ...chartData.map((item) =>
        Math.max(item.completed, item.created)
      )
    );
  }, []);

  return (
    <div className={embedded ? "chart-card chart-card-embedded" : "chart-card"}>
      {!embedded && (
        <div className="chart-card-header">
          <div>
            <span className="chart-small-label">
              <TrendingUp size={14} />
              Activity
            </span>

            <h3>Task activity</h3>
          </div>

          <select className="dashboard-select">
            <option>This week</option>
            <option>This month</option>
            <option>Last 3 months</option>
          </select>
        </div>
      )}

      <div className="simple-chart">
        <div className="chart-y-axis">
          <span>60</span>
          <span>45</span>
          <span>30</span>
          <span>15</span>
          <span>0</span>
        </div>

        <div className="chart-main">
          <div className="chart-grid-lines">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="chart-bars">
            {chartData.map((item) => {
              const completedHeight =
                (item.completed / maxValue) * 100;

              const createdHeight =
                (item.created / maxValue) * 100;

              return (
                <div className="chart-column" key={item.name}>
                  <div className="chart-bars-area">
                    <div
                      className="chart-bar chart-bar-created"
                      style={{
                        height: `${createdHeight}%`,
                      }}
                      title={`Created: ${item.created}`}
                    />

                    <div
                      className="chart-bar chart-bar-completed"
                      style={{
                        height: `${completedHeight}%`,
                      }}
                      title={`Completed: ${item.completed}`}
                    />
                  </div>

                  <span className="chart-day">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="chart-summary">
        <div>
          <span className="chart-summary-label">
            Completed
          </span>

          <strong>
            {chartData.reduce(
              (total, item) => total + item.completed,
              0
            )}
          </strong>
        </div>

        <div>
          <span className="chart-summary-label">
            Created
          </span>

          <strong>
            {chartData.reduce(
              (total, item) => total + item.created,
              0
            )}
          </strong>
        </div>

        <div>
          <span className="chart-summary-label">
            Growth
          </span>

          <strong className="positive-value">
            +18.4%
          </strong>
        </div>
      </div>

      <div className="chart-legend">
        <span>
          <i className="legend-dot legend-purple" />
          Completed
        </span>

        <span>
          <i className="legend-dot legend-green" />
          Created
        </span>
      </div>
    </div>
  );
}