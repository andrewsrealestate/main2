$(function () {
  "use strict";

  // Define cells in the global scope
  let cells = {};

  fetch("https://script.google.com/macros/s/AKfycbzC5rF8Q5Xx7LyJmcwL82M6RR0o1oBHqHKFDB7Gx0HSeWdFUxAMDT17D4ZbGsM6tSAJ/exec")
  .then(response => response.json())
  .then(data => {
    // Define a cell mapping to easily access cells by their reference
    cells = {
      B3: data[1][0],
      C3: data[1][1],
      D3: data[1][2],
      E3: data[1][3],
      F3: data[1][4],
      G3: data[1][5],
      H3: data[1][6],
      I3: data[1][7],
      J3: data[1][8],
      K3: data[1][9],
      L3: data[1][10],
      M3: data[1][11],
      N3: data[1][12],
      O3: data[1][13],
      P3: data[1][14],
      Q3: data[1][15],
      R3: data[1][16],
      S3: data[1][17],
      T3: data[1][18],
      U3: data[1][19],
      V3: data[1][20],
      W3: data[1][21],
      X3: data[1][22],
      Y3: data[1][23],
      Z3: data[1][24],
      AA3: data[1][25],
      AB3: data[1][26],
      AC3: data[1][27],
      AD3: data[1][28],
      AE3: data[1][29],
      AF3: data[1][30],
      AG3: data[1][31],
      AH3: data[1][32],
      AI3: data[1][33],
      AJ3: data[1][34],
      AK3: data[1][35],
      AL3: data[1][36],
      AM3: data[1][37],
      AN3: data[1][38],
      AO3: data[1][39],
      AP3: data[1][40],
      AQ3: data[1][41],
      AR3: data[1][42],
      AS3: data[1][43],
      AT3: data[1][44],
      AU3: data[1][45],
      AV3: data[1][46],
      B4: data[2][0],
      C4: data[2][1],
      D4: data[2][2],
      E4: data[2][3],
      F4: data[2][4],
      G4: data[2][5],
      H4: data[2][6],
      I4: data[2][7],
      J4: data[2][8],
      K4: data[2][9],
      L4: data[2][10],
      M4: data[2][11],
      N4: data[2][12],
      O4: data[2][13],
      P4: data[2][14],
      Q4: data[2][15],
      R4: data[2][16],
      S4: data[2][17],
      T4: data[2][18],
      U4: data[2][19],
      V4: data[2][20],
      W4: data[2][21],
      X4: data[2][22],
      Y4: data[2][23],
      Z4: data[2][24],
      AA4: data[2][25],
      AB4: data[2][26],
      AC4: data[2][27],
      AD4: data[2][28],
      AE4: data[2][29],
      AF4: data[2][30],
      AG4: data[2][31],
      AH4: data[2][32],
      AI4: data[2][33],
      AJ4: data[2][34],
      AK4: data[2][35],
      AL4: data[2][36],
      AM4: data[2][37],
      AN4: data[2][38],
      AO4: data[2][39],
      AP4: data[2][40],
      AQ4: data[2][41],
      AR4: data[2][42],
      AS4: data[2][43],
      AT4: data[2][44],
      AU4: data[2][45],
      AV4: data[2][46],
      B5: data[3][0],
      C5: data[3][1],
      D5: data[3][2],
      E5: data[3][3],
      F5: data[3][4],
      G5: data[3][5],
      H5: data[3][6],
      I5: data[3][7],
      J5: data[3][8],
      K5: data[3][9],
      L5: data[3][10],
      M5: data[3][11],
      N5: data[3][12],
      O5: data[3][13],
      P5: data[3][14],
      Q5: data[3][15],
      R5: data[3][16],
      S5: data[3][17],
      T5: data[3][18],
      U5: data[3][19],
      V5: data[3][20],
      W5: data[3][21],
      X5: data[3][22],
      Y5: data[3][23],
      Z5: data[3][24],
      AA5: data[3][25],
      AB5: data[3][26],
      AC5: data[3][27],
      AD5: data[3][28],
      AE5: data[3][29],
      AF5: data[3][30],
      AG5: data[3][31],
      AH5: data[3][32],
      AI5: data[3][33],
      AJ5: data[3][34],
      AK5: data[3][35],
      AL5: data[3][36],
      AM5: data[3][37],
      AN5: data[3][38],
      AO5: data[3][39],
      AP5: data[3][40],
      AQ5: data[3][41],
      AR5: data[3][42],
      AS5: data[3][43],
      AT5: data[3][44],
      AU5: data[3][45],
      AV5: data[3][46],
      H2: data[0][6],
      I2: data[0][7],
      J2: data[0][8],
      K2: data[0][9],
      L2: data[0][10],
      M2: data[0][11],
      N2: data[0][12],
      O2: data[0][13],
      P2: data[0][14],
      Q2: data[0][15],
      R2: data[0][16],
      S2: data[0][17],
    };

    document.getElementById("data-c3").innerText = cells.C3 || "N/A"; // Fallback if C3 is undefined

    // Example usage
    console.log("Fetched cells data:", cells);

    // Update dynamic text content
      document.getElementById("data-c3").innerText = cells.C3;
      document.getElementById("data-d3").innerText = cells.D3;
      document.getElementById("data-e3").innerText = cells.E3;
      document.getElementById("data-f3").innerText = cells.F3;

    // Use cell data in chart 1
    var options = {
      series: [{
        name: "Net Sales",
        data: [cells.H3, cells.I3, cells.J3, cells.K3, cells.L3, cells.M3, cells.N3, cells.O3, cells.P3, cells.Q3, cells.R3, cells.S3] // Example data array using mapped cells
      }],
      chart: {
        height: 105,
        type: 'area',
        sparkline: { enabled: true },
        zoom: { enabled: false }
      },
      dataLabels: { enabled: false },
      stroke: { width: 1.7, curve: 'smooth' },
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
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: { formatter: function () { return "" } }
        },
        marker: { show: false }
      },
      xaxis: {
        categories: [cells.H2, cells.I2, cells.J2, cells.K2, cells.L2, cells.M2, cells.N2, cells.O2, cells.P2, cells.Q2, cells.R2, cells.S2],
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart1"), options);
    chart.render();
  })
  .catch(error => console.error("Error fetching data:", error));

  
 


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
      categories: [cells.H2, cells.I2, cells.J2, cells.K2, cells.L2, cells.M2, cells.N2, cells.O2, cells.P2, cells.Q2, cells.R2, cells.S2],
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();



  // chart 4

  var options = {
    series: [{
      name: "Buyers",
      data: [cells.T3, cells.U3, cells.V3, cells.W3, cells.X3, cells.Y3, cells.Z3, cells.AA3, cells.AB3, cells.AC3, cells.AD3, cells.AE3]
    },
    {
      name: "Sellers",
      data: [cells.AF3, cells.AG3, cells.AH3, cells.AI3, cells.AJ3, cells.AK3, cells.AL3, cells.AM3, cells.AN3, cells.AO3, cells.AP3, cells.AQ3]
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
      categories: [cells.H2, cells.I2, cells.J2, cells.K2, cells.L2, cells.M2, cells.N2, cells.O2, cells.P2, cells.Q2, cells.R2, cells.S2],
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
