using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Chartist.RNChartist
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNChartistModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNChartistModule"/>.
        /// </summary>
        internal RNChartistModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNChartist";
            }
        }
    }
}
