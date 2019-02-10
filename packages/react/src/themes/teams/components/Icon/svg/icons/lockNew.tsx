import * as React from 'react'
import cx from 'classnames'
import { TeamsProcessedSvgIconSpec } from '../types'
import { teamsIconClassNames } from '../teamsIconClassNames'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M22,22c0,0.303-0.085,0.558-0.254,0.766c-0.17,0.209-0.39,0.381-0.66,0.516
        c-0.271,0.136-0.574,0.241-0.91,0.316c-0.336,0.076-0.675,0.131-1.016,0.164c-0.342,0.034-0.666,0.054-0.973,0.059
        c-0.308,0.006-0.565,0.008-0.773,0.008h-2.828c-0.208,0-0.466-0.002-0.773-0.008c-0.308-0.005-0.632-0.024-0.973-0.059
        c-0.341-0.033-0.68-0.088-1.016-0.164c-0.336-0.075-0.64-0.181-0.91-0.316c-0.271-0.135-0.491-0.307-0.66-0.516
        C10.084,22.558,10,22.303,10,22v-6.5c0-0.203,0.04-0.395,0.121-0.574c0.081-0.18,0.19-0.338,0.328-0.477
        c0.138-0.138,0.297-0.247,0.477-0.328C11.105,14.041,11.297,14,11.5,14H12v-2c0-0.364,0.048-0.716,0.145-1.055
        c0.096-0.338,0.231-0.656,0.406-0.953c0.174-0.297,0.384-0.567,0.629-0.812c0.245-0.244,0.516-0.454,0.812-0.629
        c0.297-0.174,0.614-0.31,0.953-0.406C15.284,8.049,15.635,8,16,8c0.364,0,0.716,0.049,1.055,0.145
        c0.338,0.097,0.656,0.232,0.953,0.406c0.297,0.175,0.567,0.385,0.812,0.629c0.244,0.245,0.454,0.516,0.629,0.812
        c0.174,0.297,0.31,0.615,0.406,0.953C19.951,11.284,20,11.636,20,12v2h0.5c0.203,0,0.395,0.041,0.574,0.121
        c0.18,0.081,0.338,0.19,0.477,0.328c0.138,0.139,0.247,0.297,0.328,0.477C21.959,15.105,22,15.297,22,15.5V22z M21,22v-6.5
        c0-0.135-0.05-0.252-0.148-0.352C20.752,15.05,20.635,15,20.5,15h-9c-0.136,0-0.253,0.05-0.352,0.148
        C11.049,15.248,11,15.365,11,15.5V22c0,0.136,0.084,0.249,0.254,0.34c0.169,0.092,0.384,0.168,0.645,0.23
        c0.26,0.062,0.549,0.111,0.867,0.145c0.317,0.034,0.624,0.059,0.918,0.074c0.294,0.016,0.56,0.026,0.797,0.031
        c0.237,0.006,0.407,0.008,0.512,0.008H17c0.104,0,0.274-0.002,0.512-0.008c0.236-0.005,0.504-0.016,0.801-0.031
        s0.604-0.04,0.922-0.074c0.317-0.033,0.606-0.082,0.867-0.145c0.26-0.062,0.475-0.141,0.645-0.234C20.915,22.242,21,22.131,21,22z
        M19,14v-2c0-0.406-0.08-0.791-0.238-1.156c-0.159-0.364-0.375-0.684-0.648-0.957s-0.593-0.489-0.957-0.648
        C16.791,9.08,16.406,9,16,9s-0.792,0.08-1.156,0.238c-0.365,0.159-0.684,0.375-0.957,0.648s-0.49,0.593-0.648,0.957
        C13.079,11.209,13,11.594,13,12v2H19z M17.5,18c0,0.156-0.025,0.308-0.074,0.453c-0.05,0.146-0.119,0.28-0.207,0.402
        c-0.089,0.123-0.194,0.232-0.316,0.328c-0.123,0.097-0.257,0.171-0.402,0.223V21h-1v-1.594c-0.146-0.052-0.28-0.126-0.402-0.223
        c-0.123-0.096-0.228-0.205-0.316-0.328c-0.089-0.122-0.158-0.256-0.207-0.402C14.524,18.308,14.5,18.156,14.5,18
        c0-0.203,0.04-0.395,0.121-0.574c0.081-0.18,0.19-0.338,0.328-0.477c0.138-0.138,0.297-0.247,0.477-0.328
        c0.18-0.08,0.371-0.121,0.574-0.121s0.395,0.041,0.574,0.121c0.18,0.081,0.338,0.19,0.477,0.328
        c0.138,0.139,0.247,0.297,0.328,0.477C17.459,17.605,17.5,17.797,17.5,18z M16.5,18c0-0.135-0.05-0.252-0.148-0.352
        C16.252,17.55,16.135,17.5,16,17.5c-0.136,0-0.253,0.05-0.352,0.148C15.549,17.748,15.5,17.865,15.5,18
        c0,0.136,0.049,0.253,0.148,0.352c0.099,0.1,0.216,0.148,0.352,0.148c0.135,0,0.252-0.049,0.352-0.148
        C16.45,18.253,16.5,18.136,16.5,18z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M22,22c0,0.303-0.085,0.558-0.254,0.766c-0.17,0.209-0.39,0.381-0.66,0.516
        c-0.271,0.136-0.576,0.241-0.914,0.316c-0.339,0.076-0.678,0.131-1.016,0.164c-0.339,0.034-0.662,0.054-0.969,0.059
        c-0.308,0.006-0.565,0.008-0.773,0.008h-2.828c-0.208,0-0.466-0.002-0.773-0.008c-0.308-0.005-0.63-0.024-0.969-0.059
        c-0.339-0.033-0.677-0.088-1.016-0.164c-0.339-0.075-0.644-0.181-0.914-0.316c-0.271-0.135-0.491-0.307-0.66-0.516
        C10.084,22.558,10,22.303,10,22v-6.5c0-0.203,0.04-0.395,0.121-0.574c0.081-0.18,0.19-0.338,0.328-0.477
        c0.138-0.138,0.297-0.247,0.477-0.328C11.105,14.041,11.297,14,11.5,14H12v-2c0-0.547,0.105-1.062,0.316-1.547
        s0.499-0.908,0.863-1.273c0.364-0.364,0.789-0.652,1.273-0.863S15.453,8,16,8s1.062,0.105,1.547,0.316s0.908,0.499,1.273,0.863
        c0.364,0.365,0.652,0.789,0.863,1.273S20,11.453,20,12v2h0.5c0.203,0,0.395,0.041,0.574,0.121c0.18,0.081,0.338,0.19,0.477,0.328
        c0.138,0.139,0.247,0.297,0.328,0.477C21.959,15.105,22,15.297,22,15.5V22z M19,14v-2c0-0.411-0.08-0.798-0.238-1.16
        c-0.159-0.361-0.375-0.68-0.648-0.953s-0.592-0.489-0.953-0.648C16.798,9.08,16.411,9,16,9c-0.412,0-0.798,0.08-1.16,0.238
        c-0.362,0.159-0.68,0.375-0.953,0.648s-0.49,0.592-0.648,0.953C13.079,11.202,13,11.589,13,12v2H19z M17.5,18
        c0-0.203-0.041-0.395-0.121-0.574c-0.081-0.18-0.19-0.338-0.328-0.477c-0.139-0.138-0.297-0.247-0.477-0.328
        C16.395,16.541,16.203,16.5,16,16.5s-0.395,0.041-0.574,0.121c-0.18,0.081-0.339,0.19-0.477,0.328
        c-0.138,0.139-0.248,0.297-0.328,0.477C14.54,17.605,14.5,17.797,14.5,18c0,0.156,0.024,0.308,0.074,0.453
        c0.049,0.146,0.118,0.28,0.207,0.402c0.088,0.123,0.194,0.232,0.316,0.328c0.122,0.097,0.256,0.171,0.402,0.223V21h1v-1.594
        c0.146-0.052,0.279-0.126,0.402-0.223c0.122-0.096,0.228-0.205,0.316-0.328c0.088-0.122,0.157-0.256,0.207-0.402
        C17.475,18.308,17.5,18.156,17.5,18z"
        />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
