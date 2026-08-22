import React from 'react';
import { IonIcon } from '@ionic/react';
import { 
  calendarOutline, 
  notificationsOutline, 
  searchOutline, 
  addOutline, 
  listOutline, 
  mailOutline, 
  timeOutline, 
  navigateOutline, 
  videocam,
  chevronBackOutline
} from 'ionicons/icons';

export const IPhoneMockup = ({ 
  screenType = 'day-schedule', 
  className = '', 
  elevated = false 
}) => {
  return (
    <div 
      className={`relative rounded-[48px] bg-[#121212] p-[9px] shadow-phone transition-all duration-500 hover:scale-[1.02] ${
        elevated ? 'shadow-phone-elevated -translate-y-4' : ''
      } ${className}`}
      style={{
        width: '270px',
        height: '560px',
        border: '4px solid #2d2d2d',
      }}
    >
      {/* Outer Titanium Edge Glare */}
      <div className="absolute inset-0 rounded-[44px] pointer-events-none ring-1 ring-white/20" />
      
      {/* Screen Inner Frame */}
      <div className="relative w-full h-full bg-white rounded-[38px] overflow-hidden flex flex-col select-none text-gray-900 text-xs shadow-inner">
        
        {/* iOS Status Bar */}
        <div className="pt-2 px-5 pb-1 flex justify-between items-center z-30 bg-white/90 backdrop-blur-sm">
          <span className="font-semibold text-[11px] tracking-tight">1:47</span>
          
          {/* Dynamic Island */}
          <div className="w-[84px] h-[20px] bg-black rounded-full flex items-center justify-between px-2.5 mx-auto">
            <div className="w-2.5 h-2.5 rounded-full bg-[#151515] ring-1 ring-white/10" />
            <div className="w-2 h-2 rounded-full bg-[#052e16] ring-1 ring-emerald-500/50" />
          </div>

          {/* Right Status Icons */}
          <div className="flex items-center space-x-1.5 text-[10px]">
            <svg className="w-3.5 h-2.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z"/>
            </svg>
            <svg className="w-3 h-2.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z"/>
            </svg>
            <div className="w-4 h-2 border border-gray-900 rounded-[3px] p-[0.5px] flex items-center">
              <div className="h-full w-2.5 bg-gray-900 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen Content Based on screenType */}
        <div className="flex-1 overflow-hidden relative flex flex-col bg-white">
          {renderScreenContent(screenType)}
        </div>

        {/* Home Indicator Bar */}
        <div className="pb-1.5 pt-1 flex justify-center bg-white">
          <div className="w-24 h-1 bg-gray-900 rounded-full" />
        </div>
      </div>
    </div>
  );
};

const renderScreenContent = (type) => {
  switch (type) {
    case 'day-schedule':
      return (
        <div className="flex-1 flex flex-col font-sans">
          {/* Header */}
          <div className="px-3 pt-1 pb-2 flex justify-between items-center border-b border-gray-100">
            <div className="flex items-center text-brand-500 font-medium text-xs">
              <IonIcon icon={chevronBackOutline} className="text-sm mr-0.5" />
              <span>July</span>
            </div>
            <div className="flex space-x-3 text-brand-500 text-sm">
              <IonIcon icon={listOutline} />
              <IonIcon icon={searchOutline} />
              <IonIcon icon={addOutline} />
            </div>
          </div>

          {/* Day Selector */}
          <div className="px-2 py-1.5 flex justify-between text-center border-b border-gray-100 text-[10px]">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-gray-400 font-medium text-[9px]">{day}</span>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-semibold mt-0.5 ${
                  i === 5 ? 'bg-brand-500 text-white' : 'text-gray-800'
                }`}>
                  {16 + i}
                </span>
              </div>
            ))}
          </div>

          <div className="text-[10px] text-gray-500 px-3 py-1 font-medium bg-gray-50/50">
            Friday 21 July 2023
          </div>

          {/* Timeline Grid */}
          <div className="flex-1 px-3 py-1 overflow-y-auto space-y-3 font-mono text-[9px] text-gray-400">
            {['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM'].map((time, idx) => (
              <div key={idx} className="flex items-center space-x-2 border-b border-gray-100 pb-2">
                <span className="w-9 font-medium text-gray-400">{time}</span>
                <div className="flex-1 h-[1px] bg-gray-100" />
                {idx === 7 && (
                  <div className="absolute left-14 right-3 bg-brand-50 border-l-2 border-brand-500 rounded p-1 text-[10px] font-sans text-gray-800 shadow-sm">
                    <span className="font-semibold text-brand-600">Morning Health Check</span>
                    <p className="text-[8px] text-gray-500">Vitals & Glucose logged</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Tabs */}
          <div className="flex justify-between px-6 py-2 border-t border-gray-100 text-[10px] font-medium bg-white">
            <span className="text-brand-500 font-semibold">Today</span>
            <span className="text-gray-500">Calendars</span>
            <span className="text-gray-500">Inbox</span>
          </div>
        </div>
      );

    case 'month-view':
      return (
        <div className="flex-1 flex flex-col font-sans">
          {/* Header */}
          <div className="px-3 pt-1 pb-1 flex justify-between items-center">
            <div className="flex items-center text-brand-500 font-medium text-xs">
              <IonIcon icon={chevronBackOutline} className="text-sm mr-0.5" />
              <span>2023</span>
            </div>
            <div className="flex space-x-3 text-brand-500 text-sm">
              <IonIcon icon={calendarOutline} />
              <IonIcon icon={searchOutline} />
              <IonIcon icon={addOutline} />
            </div>
          </div>

          {/* Month Title */}
          <div className="px-4 pt-1 font-bold text-sm text-brand-500">July</div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 text-center text-[9px] text-gray-400 px-3 py-1 font-medium">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>

          {/* Month Numbers Grid */}
          <div className="grid grid-cols-7 gap-y-1.5 text-center text-[10px] px-3 font-medium text-gray-800">
            <span className="text-gray-300"></span><span className="text-gray-300"></span><span className="text-gray-300"></span><span className="text-gray-300"></span><span className="text-gray-300"></span><span className="text-gray-300"></span><span>1</span>
            <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
            <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
            <span>16</span><span>17</span><span>18</span><span>19</span><span>20</span>
            <span className="w-5 h-5 bg-brand-500 text-white rounded-full mx-auto flex items-center justify-center font-bold">21</span>
            <span>22</span>
            <span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span>
            <span>30</span><span>31</span>
          </div>

          {/* Next Month Header */}
          <div className="px-4 pt-3 font-bold text-sm text-gray-800">Aug</div>
          <div className="grid grid-cols-7 gap-y-1 text-center text-[10px] px-3 pt-1 font-medium text-gray-800">
            <span className="text-gray-300"></span><span className="text-gray-300"></span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
            <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
          </div>

          {/* Bottom Bar */}
          <div className="mt-auto flex justify-between px-6 py-2 border-t border-gray-100 text-[10px] font-medium bg-white">
            <span className="text-brand-500 font-semibold">Today</span>
            <span className="text-gray-500">Calendars</span>
            <span className="text-gray-500">Inbox</span>
          </div>
        </div>
      );

    case 'whats-new':
      return (
        <div className="flex-1 flex flex-col justify-between p-4 bg-white font-sans">
          <div className="pt-2 text-center">
            <h3 className="text-base font-bold text-gray-900 tracking-tight leading-tight">
              What's New<br />in Calendar
            </h3>
          </div>

          <div className="space-y-3.5 px-1 my-auto">
            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-brand-500 shrink-0">
                <IonIcon icon={mailOutline} className="text-sm" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 text-[11px]">Found Events</h4>
                <p className="text-[8.5px] text-gray-500 leading-tight">
                  Siri suggests events found in Mail, Messages, and Safari, so you can add them easily.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-brand-500 shrink-0">
                <IonIcon icon={timeOutline} className="text-sm" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 text-[11px]">Time to Leave</h4>
                <p className="text-[8.5px] text-gray-500 leading-tight">
                  Calendar uses Apple Maps to look up locations, traffic, and transit options to tell you when to leave.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-brand-500 shrink-0">
                <IonIcon icon={navigateOutline} className="text-sm" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 text-[11px]">Location Suggestions</h4>
                <p className="text-[8.5px] text-gray-500 leading-tight">
                  Calendar suggests locations based on your past events and significant locations.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-1">
            <button className="w-full py-2.5 bg-brand-500 text-white rounded-xl font-semibold text-xs shadow-md shadow-brand-500/20 active:scale-95 transition-transform">
              Continue
            </button>
          </div>
        </div>
      );

    case 'permission-location':
      return (
        <div className="flex-1 flex flex-col font-sans relative">
          {/* Faded Background Calendar */}
          <div className="opacity-30 pointer-events-none p-2">
            <div className="font-bold text-xs text-brand-500 mb-1">July 2023</div>
            <div className="space-y-2 text-[9px]">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-100 rounded w-2/3"></div>
            </div>
          </div>

          {/* Modal Overlay */}
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px] flex items-center justify-center p-3 z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full p-3 text-center shadow-xl border border-white/40">
              <h4 className="font-bold text-[11px] text-gray-900 mb-1 leading-snug">
                Allow "Calendar" to use your location?
              </h4>
              <p className="text-[8px] text-gray-500 leading-tight mb-2">
                Your location is used for time to leave alerts, to improve location searches, and to suggest event locations.
              </p>

              {/* Map Preview */}
              <div className="h-14 w-full rounded-lg bg-gradient-to-tr from-emerald-100 via-sky-100 to-amber-100 relative overflow-hidden mb-2 flex items-center justify-center border border-gray-200">
                <span className="text-[8.5px] font-semibold text-blue-600 bg-white/90 px-2 py-0.5 rounded-full shadow-sm">
                  ✓ Precise: On
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-0.5 text-[9.5px] font-semibold text-blue-600">
                <button className="w-full py-1.5 border-t border-gray-200 active:bg-gray-100 rounded">
                  Allow Once
                </button>
                <button className="w-full py-1.5 border-t border-gray-200 active:bg-gray-100 rounded">
                  Allow While Using App
                </button>
                <button className="w-full py-1.5 border-t border-gray-200 text-gray-500 active:bg-gray-100 rounded">
                  Don't Allow
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case 'permission-notification':
      return (
        <div className="flex-1 flex flex-col font-sans relative">
          {/* Faded Background */}
          <div className="opacity-30 pointer-events-none p-2 space-y-2">
            <div className="font-bold text-xs text-brand-500">July 2023</div>
            <div className="h-6 bg-brand-50 rounded-lg p-1 text-[8px] text-brand-600">Hydration target 80%</div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
            <div className="h-12 bg-gray-100 rounded-lg"></div>
          </div>

          {/* Modal Overlay */}
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px] flex items-center justify-center p-3 z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full p-3.5 text-center shadow-xl border border-white/40">
              <h4 className="font-bold text-[11px] text-gray-900 mb-1 leading-snug">
                "Calendar" Would Like to Send You Notifications
              </h4>
              <p className="text-[8px] text-gray-500 leading-tight mb-3">
                Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.
              </p>

              <div className="grid grid-cols-2 border-t border-gray-200 text-[10px] font-semibold text-blue-600 divide-x divide-gray-200 pt-1">
                <button className="py-1 active:bg-gray-100 rounded text-gray-600">
                  Don't Allow
                </button>
                <button className="py-1 active:bg-gray-100 rounded text-blue-600 font-bold">
                  Allow
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case 'new-event':
      return (
        <div className="flex-1 flex flex-col bg-[#f2f2f7] font-sans">
          {/* Form Header */}
          <div className="bg-white px-3 py-2 flex justify-between items-center border-b border-gray-200">
            <span className="text-brand-500 text-[11px] font-medium">Cancel</span>
            <span className="font-semibold text-[11px]">New Event</span>
            <span className="text-gray-400 text-[11px] font-semibold">Add</span>
          </div>

          {/* Form Fields */}
          <div className="p-2 space-y-2">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <div className="text-[11px] text-gray-800 border-b border-gray-100 pb-1 mb-1 font-medium">
                Title
              </div>
              <div className="text-[10px] text-gray-400">
                Location or Video Call
              </div>
            </div>

            <div className="bg-white rounded-lg px-2.5 py-1 text-[10px] space-y-1.5 shadow-sm">
              <div className="flex justify-between items-center py-0.5">
                <span className="text-gray-700">All-day</span>
                <div className="w-7 h-4 bg-gray-200 rounded-full relative p-0.5">
                  <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-1">
                <span className="text-gray-700">Starts</span>
                <div className="flex space-x-1">
                  <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 font-medium text-[8.5px]">Jul 21, 2023</span>
                  <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 font-medium text-[8.5px]">9:00 AM</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-1">
                <span className="text-gray-700">Ends</span>
                <div className="flex space-x-1">
                  <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 font-medium text-[8.5px]">Jul 21, 2023</span>
                  <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 font-medium text-[8.5px]">10:00 AM</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-1">
                <span className="text-gray-700">Travel Time</span>
                <span className="text-gray-400 text-[8.5px]">None ⌃</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-1">
                <span className="text-gray-700">Repeat</span>
                <span className="text-gray-400 text-[8.5px]">Never ⌃</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-1">
                <span className="text-gray-700">Alert</span>
                <span className="text-gray-400 text-[8.5px]">None ⌃</span>
              </div>
            </div>
          </div>

          {/* iOS Keyboard Mockup */}
          <div className="mt-auto bg-[#d1d5db] p-1 pt-1.5 rounded-t-xl space-y-1 shadow-inner">
            <div className="flex justify-center space-x-0.5">
              {['Q','W','E','R','T','Y','U','I','O','P'].map(k => (
                <span key={k} className="bg-white rounded py-1 w-5 text-center text-[9px] font-medium shadow-sm">{k}</span>
              ))}
            </div>
            <div className="flex justify-center space-x-0.5">
              {['A','S','D','F','G','H','J','K','L'].map(k => (
                <span key={k} className="bg-white rounded py-1 w-5 text-center text-[9px] font-medium shadow-sm">{k}</span>
              ))}
            </div>
            <div className="flex justify-center space-x-0.5">
              {['⇧','Z','X','C','V','B','N','M','⌫'].map(k => (
                <span key={k} className="bg-white rounded py-1 w-5 text-center text-[9px] font-medium shadow-sm">{k}</span>
              ))}
            </div>
            <div className="flex justify-center space-x-1 pt-0.5">
              <span className="bg-gray-200 rounded py-1 w-7 text-center text-[8px] font-bold">123</span>
              <span className="bg-white rounded py-1 flex-1 text-center text-[8.5px] shadow-sm">space</span>
              <span className="bg-blue-500 text-white rounded py-1 w-9 text-center text-[8px] font-bold shadow-sm">return</span>
            </div>
          </div>
        </div>
      );

    case 'event-details':
      return (
        <div className="flex-1 flex flex-col bg-[#f2f2f7] font-sans">
          {/* Header */}
          <div className="bg-white px-3 py-2 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center text-brand-500 text-[11px]">
              <IonIcon icon={chevronBackOutline} className="mr-0.5" />
              <span>Jul 21</span>
            </div>
            <span className="font-semibold text-[11px]">Event Details</span>
            <span className="text-brand-500 text-[11px] font-medium">Edit</span>
          </div>

          <div className="p-3 space-y-3">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Feed Minerva 🐱</h3>
              <p className="text-[8.5px] text-gray-500">Friday, Jul 21, 2023</p>
              <p className="text-[8.5px] text-gray-500">from 6:30 AM to 7:00 AM</p>
              <p className="text-[8.5px] text-gray-400">repeats daily</p>
            </div>

            {/* Schedule block */}
            <div className="bg-white rounded-xl p-2 shadow-sm space-y-1.5">
              <div className="flex items-center space-x-2 text-[9px] text-gray-400">
                <span>6 AM</span>
                <div className="flex-1 h-3 bg-brand-100 border-l-2 border-brand-500 rounded px-1 flex items-center text-brand-700 text-[8px] font-medium">
                  Feed Minerva 🐱
                </div>
              </div>
              <div className="flex items-center space-x-2 text-[9px] text-gray-400">
                <span>7 AM</span>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
              <div className="flex items-center space-x-2 text-[9px] text-gray-400">
                <span>8 AM</span>
                <div className="flex-1 h-3 bg-blue-100 border-l-2 border-blue-500 rounded px-1 flex items-center text-blue-700 text-[8px] font-medium">
                  Work 🧘
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 text-[10px] space-y-2 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Calendar</span>
                <span className="text-blue-600 font-medium flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5" />
                  Calendar
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-1.5">
                <span className="text-gray-500">Alert</span>
                <span className="text-gray-700">None ⌃</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'facetime-details':
      return (
        <div className="flex-1 flex flex-col bg-[#f2f2f7] font-sans">
          {/* Header */}
          <div className="bg-white px-3 py-2 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center text-brand-500 text-[11px]">
              <IonIcon icon={chevronBackOutline} className="mr-0.5" />
              <span>Sep 7</span>
            </div>
            <span className="font-semibold text-[11px]">Event Details</span>
            <span className="text-brand-500 text-[11px] font-medium">Edit</span>
          </div>

          <div className="p-3 space-y-2.5">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Call Parents</h3>
            </div>

            {/* Video Call Action Card */}
            <div className="bg-white rounded-xl p-2.5 flex justify-between items-center shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-emerald-500 text-white flex items-center justify-center">
                  <IonIcon icon={videocam} className="text-xs" />
                </div>
                <span className="font-semibold text-[11px] text-gray-800">FaceTime</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <button className="bg-gray-100 text-blue-600 font-bold px-2.5 py-0.5 rounded-full text-[9.5px] active:bg-gray-200">
                  Join
                </button>
                <div className="text-blue-500 text-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-[8.5px] text-gray-500">
              Thursday, Sep 7, 2023<br />
              from 5 PM to 6 PM
            </div>

            {/* Timeline block */}
            <div className="bg-white rounded-xl p-2 shadow-sm space-y-1 text-[9px] text-gray-400">
              <div className="flex items-center space-x-2">
                <span>4 PM</span>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
              <div className="flex items-center space-x-2">
                <span>5 PM</span>
                <div className="flex-1 h-6 bg-sky-100 border-l-2 border-sky-500 rounded px-1 flex items-center justify-between text-sky-800 text-[8px] font-medium">
                  <span>Prepare Luggage 🧳</span>
                  <span className="bg-sky-500 text-white text-[7px] px-1 rounded">Call Parents</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>6 PM</span>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
              <div className="flex items-center space-x-2">
                <span>7 PM</span>
                <div className="flex-1 h-[1px] bg-gray-100" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-2 text-[9.5px] space-y-1.5 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Calendar</span>
                <span className="text-blue-600 font-medium flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1" />
                  Calendar
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-100 pt-1">
                <span className="text-gray-500">Alert</span>
                <span className="text-gray-700">10 minutes before ⌃</span>
              </div>
              <div className="border-t border-gray-100 pt-1 text-gray-500 text-[8.5px]">
                <span className="font-semibold text-gray-700 block">Text</span>
                Talk about next week trip
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default IPhoneMockup;
