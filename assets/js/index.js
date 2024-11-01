$(function () {
  "use strict";

async function fetchData(selectedAgent = "All") {
    const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbzC5rF8Q5Xx7LyJmcwL82M6RR0o1oBHqHKFDB7Gx0HSeWdFUxAMDT17D4ZbGsM6tSAJ/exec";

    try {
        const response = await fetch(googleAppsScriptUrl);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        // Filter records based on selected agent
        const filteredData = data.filter(record => {
            if (selectedAgent === "All") return record[0] !== "Team Projects"; 
            return record[0] === selectedAgent;
        });

        // Calculate monthly counts and total commission
        const { monthlyCounts, totalCommission } = getMonthlyCounts(filteredData);

        // Update Chart 1 with monthly counts
        updateChart1(monthlyCounts);

        // Update displayed total commission
        updateTotalCommissionDisplay(totalCommission);

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

  // Updated getMonthlyCounts to include total commission calculation
function getMonthlyCounts(data) {
    const counts = Array(12).fill(0);
    let totalCommission = 0;
    const now = new Date();

    data.forEach(record => {
        const listName = record[2]; // Assuming "List Name" is at index 2
        const dateListed = new Date(record[7]); // Assuming "Date Listed" is at index 7
        const estCommission = parseFloat(record[16]) || 0; // Assuming "Est Commission" is at index 16

        if (listName === "Closed" && dateListed < now) {
            const monthDiff = now.getMonth() - dateListed.getMonth() + (12 * (now.getFullYear() - dateListed.getFullYear()));
            if (monthDiff > 0 && monthDiff <= 12) {
                counts[12 - monthDiff]++; // Increment count for the correct month
                totalCommission += estCommission; // Add commission to total
            }
        }
    });

    return { monthlyCounts: counts, totalCommission };
}
  // chart 1

 

  // Function to update Chart 1 with dynamic data
  function updateChart1(monthlyCounts) {
      const options = {
          series: [{
              name: "Net Sales",
              data: monthlyCounts
          }],
          chart: {
              height: 105,
              type: 'area',
              sparkline: {
                  enabled: !0
              },
              zoom: {
                  enabled: false
              }
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              width: 1.7,
              curve: 'smooth'
          },
          fill: {
              type: 'gradient',
              gradient: {
                  shade: 'dark',
                  gradientToColors: ['#02c27a'],
                  shadeIntensity: 1,
                  type: 'vertical',
                  opacityFrom: 0.5,
                  opacityTo: 0.0,
              },
          },
          colors: ["#02c27a"],
          tooltip: {
              theme: "dark",
              fixed: {
                  enabled: !1
              },
              x: {
                  show: !1
              },
              y: {
                  title: {
                      formatter: function () {
                          return ""
                      }
                  }
              },
              marker: {
                  show: !1
              }
          },
          xaxis: {
              categories: [...Array(12).keys()].map(i => {
                  const date = new Date();
                  date.setMonth(date.getMonth() - 11 + i);
                  return date.toLocaleString('default', { month: 'short' });
              })
          }
      };

      // Render chart
      const chart = new ApexCharts(document.querySelector("#chart1"), options);
      chart.render();
  }

  function updateTotalCommissionDisplay(totalCommission) {
    const commissionElement = document.querySelector("#totalCommissionDisplay");
    if (commissionElement) {
        commissionElement.textContent = `$${totalCommission.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
    }
}

  // Event listeners for dropdown menu options
  document.getElementById("filterBen").addEventListener("click", () => fetchData("Ben Andrews"));
  document.getElementById("filterTatyana").addEventListener("click", () => fetchData("Tatyana Gavrilyuk"));
  document.getElementById("filterAll").addEventListener("click", () => fetchData("All"));

  // Initial load for "All" data
  fetchData("All");
});




  // chart 2

  var options = {
    series: [78],
    chart: {
      height: 230,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -110,
        endAngle: 110,
        hollow: {
          margin: 0,
          size: '80%',
          background: 'transparent',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: false,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: 'rgba(0, 0, 0, 0.1)',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: false,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            offsetY: 10,
            color: '#111',
            fontSize: '24px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#0866ff'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    colors: ["#fc185a"],
    stroke: {
      lineCap: 'round'
    },
    labels: ['Total Orders'],
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();



  // chart 3

  var options = {
    series: [{
      name: "Net Sales",
      data: [8, 10, 25, 18, 38, 24, 20, 16, 7]
    }],
    chart: {
      //width:150,
      height: 145,
      type: 'bar',
      sparkline: {
        enabled: !0
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      curve: 'smooth',
      color: ['transparent']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#fc6718'],
        shadeIntensity: 1,
        type: 'vertical',
        //opacityFrom: 0.8,
        //opacityTo: 0.1,
        //stops: [0, 100, 100, 100]
      },
    },
    colors: ["#fc185a"],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'last',
        columnWidth: '45%',
      }
    },

    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();



  // chart 4

  var options = {
    series: [{
      name: "Sales",
      data: [20, 5, 60, 10, 30, 20, 25, 15, 31]
    },
    {
      name: "Views",
      data: [17, 10, 45, 15, 25, 15, 40, 10, 24]
    }],
    chart: {
      //width:150,
      foreColor: "#9ba7b2",
      height: 260,
      type: 'bar',
      toolbar: {
        show: !1,
      },
      sparkline: {
        enabled: !1
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      colors: ['transparent']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#0d6efd', 'rgba(13, 109, 253, 0.35);'],
        shadeIntensity: 1,
        type: 'vertical',
        //opacityFrom: 0.8,
        //opacityTo: 0.1,
        stops: [0, 100, 100, 100]
      },
    },
    colors: ['#0d6efd', "rgba(13, 109, 253, 0.35);"],
    plotOptions: {
      // bar: {
      //   horizontal: !1,
      //   columnWidth: "55%",
      //   endingShape: "rounded"
      // }
      bar: {
        horizontal: false,
        borderRadius: 4,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'last',
        columnWidth: '55%',
      }
    },
    grid: {
      show: false,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: !0
      },
      x: {
        show: !0
      },
      y: {
        title: {
          formatter: function (e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();





  // chart 5

var options = {
    series: [{
        name: "Net Sales",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        height: 115,
        type: 'area',
        sparkline: {
            enabled: !0
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1.7,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#6610f2'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.5,
            opacityTo: 0.0,
        },
    },
    colors: ["#6610f2"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();

});
