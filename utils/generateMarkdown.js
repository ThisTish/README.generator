function renderLicenseBadge(license) {
  try{
    let licenseBadge

    switch(license){
      case "MIT License":
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
        break
      case "GNU(GPL v3)":
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
        break
      case "Apache 2.0":
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
        break
      case "BSD 3-Clause":
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
        break
      case "Creative Commons":
        licenseBadge = `[![License]( https://img.shields.io/badge/License-Creative_Commons-yellowgreen.svg)]`
        break
      case "Mozilla Public License":
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
        break
      case "GNU-LGPL v3":
        licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`
        break
      case "other":
        licenseBadge = ""
        break
    }
    return licenseBadge
  }
  catch(err){
    console.log('Error Occured during badge rendering', err)
  }
}

function renderLicenseLink(license) {
  try{
    let licenseLink

    switch(license){
      case "MIT License":
        licenseLink = `(https://opensource.org/licenses/MIT)`
        break
      case "GNU(GPL v3)":
        licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
        break
      case "Apache 2.0":
        licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
        break
      case "BSD 3-Clause":
        licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`
        break
      case "Creative Commons":
        licenseLink = `(https://creativecommons.org/licenses/by-nc-sa/4.0/)`
        break
      case "Mozilla Public License":
        licenseLink = `(https://opensource.org/licenses/MPL-2.0)`
        break
      case "GNU-LGPL v3":
        licenseLink = `(https://www.gnu.org/licenses/lgpl-3.0)`
        break
      case "other":
        licenseLink = ""
        break
    }
    return licenseLink
  }
  catch(err){
    console.log('Error Occured during license link rendering', err)
  }
}

function renderLicenseSection(license, copyright) {
  let current = new Date()
  let year = current.getFullYear()

  try{
    let licenseText

    switch(license){
      case "MIT License":
        licenseText = `MIT License

        Copyright ${year} ${copyright}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
        break
      
      case "GNU(GPL v3)":
        licenseText = `The GNU General Public License is a free, copyleft license for software and other kinds of works.

        The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.
        
        When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.
        
        To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.
        
        For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.
        
        Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.
        
        For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.
        
        Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.
        
        Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.
        
        The precise terms and conditions for copying, distribution and modification can be found at https://gnu.org/licenses/gpl-3.0`
        break
      
      case "Apache 2.0":
        licenseText = ` Apache 2.0
        
        Copyright ${year} ${copyright}

        Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
    
      http://www.apache.org/licenses/LICENSE-2.0
    
        Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        
        See the License for the specific language governing permissions and limitations under the License.`
        break
      
      case "BSD 3-Clause":
        licenseText = `BSD 3-Clause
        
        Copyright ${year} ${copyright}

        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
        1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        
        2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
        break
      
      case "Creative Commons":
        licenseText = `Creative Commons License

        This license requires that reusers give credit to the creator. It allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, for noncommercial purposes only. If others modify or adapt the material, they must license the modified material under identical terms.`
        break
      
      case "Mozilla Public License":
        licenseText = `Mozilla Public License
        
1. Definitions
        
        1.1. “Contributor”
        means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software.
        
        1.2. “Contributor Version”
        means the combination of the Contributions of others (if any) used by a Contributor and that particular Contributor’s Contribution.
        
        1.3. “Contribution”
        means Covered Software of a particular Contributor.
        
        1.4. “Covered Software”
        means Source Code Form to which the initial Contributor has attached the notice in Exhibit A, the Executable Form of such Source Code Form, and Modifications of such Source Code Form, in each case including portions thereof.
        
        1.5. “Incompatible With Secondary Licenses”
        means
        
        that the initial Contributor has attached the notice described in Exhibit B to the Covered Software; or
        
        that the Covered Software was made available under the terms of version 1.1 or earlier of the License, but not also under the terms of a Secondary License.
        
        1.6. “Executable Form”
        means any form of the work other than Source Code Form.
        
        1.7. “Larger Work”
        means a work that combines Covered Software with other material, in a separate file or files, that is not Covered Software.
        
        1.8. “License”
        means this document.
        
        1.9. “Licensable”
        means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently, any and all of the rights conveyed by this License.
        
        1.10. “Modifications”
        means any of the following:
        
        any file in Source Code Form that results from an addition to, deletion from, or modification of the contents of Covered Software; or
        
        any new file in Source Code Form that contains any Covered Software.
        
        1.11. “Patent Claims” of a Contributor
        means any patent claim(s), including without limitation, method, process, and apparatus claims, in any patent Licensable by such Contributor that would be infringed, but for the grant of the License, by the making, using, selling, offering for sale, having made, import, or transfer of either its Contributions or its Contributor Version.
        
        1.12. “Secondary License”
        means either the GNU General Public License, Version 2.0, the GNU Lesser General Public License, Version 2.1, the GNU Affero General Public License, Version 3.0, or any later versions of those licenses.
        
        1.13. “Source Code Form”
        means the form of the work preferred for making modifications.
        
        1.14. “You” (or “Your”)
        means an individual or a legal entity exercising rights under this License. For legal entities, “You” includes any entity that controls, is controlled by, or is under common control with You. For purposes of this definition, “control” means (a) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (b) ownership of more than fifty percent (50%) of the outstanding shares or beneficial ownership of such entity.
        
2. License Grants and Conditions
        
        2.1. Grants
        Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license:
        
        under intellectual property rights (other than patent or trademark) Licensable by such Contributor to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and
        
        under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, and otherwise transfer either its Contributions or its Contributor Version.
        
        2.2. Effective Date
        The licenses granted in Section 2.1 with respect to any Contribution become effective for each Contribution on the date the Contributor first distributes such Contribution.
        
        2.3. Limitations on Grant Scope
        The licenses granted in this Section 2 are the only rights granted under this License. No additional rights or licenses will be implied from the distribution or licensing of Covered Software under this License. Notwithstanding Section 2.1(b) above, no patent license is granted by a Contributor:
        
        for any code that a Contributor has removed from Covered Software; or
        
        for infringements caused by: (i) Your and any other third party’s modifications of Covered Software, or (ii) the combination of its Contributions with other software (except as part of its Contributor Version); or
        
        under Patent Claims infringed by Covered Software in the absence of its Contributions.
        
        This License does not grant any rights in the trademarks, service marks, or logos of any Contributor (except as may be necessary to comply with the notice requirements in Section 3.4).
        
        2.4. Subsequent Licenses
        No Contributor makes additional grants as a result of Your choice to distribute the Covered Software under a subsequent version of this License (see Section 10.2) or under the terms of a Secondary License (if permitted under the terms of Section 3.3).
        
        2.5. Representation
        Each Contributor represents that the Contributor believes its Contributions are its original creation(s) or it has sufficient rights to grant the rights to its Contributions conveyed by this License.
        
        2.6. Fair Use
        This License is not intended to limit any rights You have under applicable copyright doctrines of fair use, fair dealing, or other equivalents.
        
        2.7. Conditions
        Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted in Section 2.1.
        
3. Responsibilities

        3.1. Distribution of Source Form
        All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License. You must inform recipients that the Source Code Form of the Covered Software is governed by the terms of this License, and how they can obtain a copy of this License. You may not attempt to alter or restrict the recipients’ rights in the Source Code Form.
        
        3.2. Distribution of Executable Form
        If You distribute Covered Software in Executable Form then:
        
        such Covered Software must also be made available in Source Code Form, as described in Section 3.1, and You must inform recipients of the Executable Form how they can obtain a copy of such Source Code Form by reasonable means in a timely manner, at a charge no more than the cost of distribution to the recipient; and
        
        You may distribute such Executable Form under the terms of this License, or sublicense it under different terms, provided that the license for the Executable Form does not attempt to limit or alter the recipients’ rights in the Source Code Form under this License.
        
        3.3. Distribution of a Larger Work
        You may create and distribute a Larger Work under terms of Your choice, provided that You also comply with the requirements of this License for the Covered Software. If the Larger Work is a combination of Covered Software with a work governed by one or more Secondary Licenses, and the Covered Software is not Incompatible With Secondary Licenses, this License permits You to additionally distribute such Covered Software under the terms of such Secondary License(s), so that the recipient of the Larger Work may, at their option, further distribute the Covered Software under the terms of either this License or such Secondary License(s).
        
        3.4. Notices
        You may not remove or alter the substance of any license notices (including copyright notices, patent notices, disclaimers of warranty, or limitations of liability) contained within the Source Code Form of the Covered Software, except that You may alter any license notices to the extent required to remedy known factual inaccuracies.
        
        3.5. Application of Additional Terms
        You may choose to offer, and to charge a fee for, warranty, support, indemnity or liability obligations to one or more recipients of Covered Software. However, You may do so only on Your own behalf, and not on behalf of any Contributor. You must make it absolutely clear that any such warranty, support, indemnity, or liability obligation is offered by You alone, and You hereby agree to indemnify every Contributor for any liability incurred by such Contributor as a result of warranty, support, indemnity or liability terms You offer. You may include additional disclaimers of warranty and limitations of liability specific to any jurisdiction.
        
4. Inability to Comply Due to Statute or Regulation

        If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Covered Software due to statute, judicial order, or regulation then You must: (a) comply with the terms of this License to the maximum extent possible; and (b) describe the limitations and the code they affect. Such description must be placed in a text file included with all distributions of the Covered Software under this License. Except to the extent prohibited by statute or regulation, such description must be sufficiently detailed for a recipient of ordinary skill to be able to understand it.
        
5. Termination

        5.1. The rights granted under this License will terminate automatically if You fail to comply with any of its terms. However, if You become compliant, then the rights granted under this License from a particular Contributor are reinstated (a) provisionally, unless and until such Contributor explicitly and finally terminates Your grants, and (b) on an ongoing basis, if such Contributor fails to notify You of the non-compliance by some reasonable means prior to 60 days after You have come back into compliance. Moreover, Your grants from a particular Contributor are reinstated on an ongoing basis if such Contributor notifies You of the non-compliance by some reasonable means, this is the first time You have received notice of non-compliance with this License from such Contributor, and You become compliant prior to 30 days after Your receipt of the notice.
        
        5.2. If You initiate litigation against any entity by asserting a patent infringement claim (excluding declaratory judgment actions, counter-claims, and cross-claims) alleging that a Contributor Version directly or indirectly infringes any patent, then the rights granted to You by any and all Contributors for the Covered Software under Section 2.1 of this License shall terminate.
        
        5.3. In the event of termination under Sections 5.1 or 5.2 above, all end user license agreements (excluding distributors and resellers) which have been validly granted by You or Your distributors under this License prior to termination shall survive termination.
        
6. Disclaimer of Warranty

        Covered Software is provided under this License on an “as is” basis, without warranty of any kind, either expressed, implied, or statutory, including, without limitation, warranties that the Covered Software is free of defects, merchantable, fit for a particular purpose or non-infringing. The entire risk as to the quality and performance of the Covered Software is with You. Should any Covered Software prove defective in any respect, You (not any Contributor) assume the cost of any necessary servicing, repair, or correction. This disclaimer of warranty constitutes an essential part of this License. No use of any Covered Software is authorized under this License except under this disclaimer.
        
7. Limitation of Liability

        Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.
        
8. Litigation

        Any litigation relating to this License may be brought only in the courts of a jurisdiction where the defendant maintains its principal place of business and such litigation shall be governed by laws of that jurisdiction, without reference to its conflict-of-law provisions. Nothing in this Section shall prevent a party’s ability to bring cross-claims or counter-claims.
        
9. Miscellaneous

        This License represents the complete agreement concerning the subject matter hereof. If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable. Any law or regulation which provides that the language of a contract shall be construed against the drafter shall not be used to construe this License against a Contributor.
        
10. Versions of the License

        10.1. New Versions
        Mozilla Foundation is the license steward. Except as provided in Section 10.3, no one other than the license steward has the right to modify or publish new versions of this License. Each version will be given a distinguishing version number.
        
        10.2. Effect of New Versions
        You may distribute the Covered Software under the terms of the version of the License under which You originally received the Covered Software, or under the terms of any subsequent version published by the license steward.
        
        10.3. Modified Versions
        If you create software not governed by this License, and you want to create a new license for such software, you may create and use a modified version of this License if you rename the license and remove any references to the name of the license steward (except to note that such modified license differs from this License).
        
        10.4. Distributing Source Code Form that is Incompatible With Secondary Licenses
        If You choose to distribute Source Code Form that is Incompatible With Secondary Licenses under the terms of this version of the License, the notice described in Exhibit B of this License must be attached.`
        break
      
      case "GNU-LGPL v3":
        licenseText = `This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below.

0. Additional Definitions.

        As used herein, “this License” refers to version 3 of the GNU Lesser General Public License, and the “GNU GPL” refers to version 3 of the GNU General Public License.
        
        “The Library” refers to a covered work governed by this License, other than an Application or a Combined Work as defined below.
        
        An “Application” is any work that makes use of an interface provided by the Library, but which is not otherwise based on the Library. Defining a subclass of a class defined by the Library is deemed a mode of using an interface provided by the Library.
        
        A “Combined Work” is a work produced by combining or linking an Application with the Library. The particular version of the Library with which the Combined Work was made is also called the “Linked Version”.
        
        The “Minimal Corresponding Source” for a Combined Work means the Corresponding Source for the Combined Work, excluding any source code for portions of the Combined Work that, considered in isolation, are based on the Application, and not on the Linked Version.
        
        The “Corresponding Application Code” for a Combined Work means the object code and/or source code for the Application, including any data and utility programs needed for reproducing the Combined Work from the Application, but excluding the System Libraries of the Combined Work.
        
1. Exception to Section 3 of the GNU GPL.

        You may convey a covered work under sections 3 and 4 of this License without being bound by section 3 of the GNU GPL.
        
2. Conveying Modified Versions.

        If you modify a copy of the Library, and, in your modifications, a facility refers to a function or data to be supplied by an Application that uses the facility (other than as an argument passed when the facility is invoked), then you may convey a copy of the modified version:
        
        a) under this License, provided that you make a good faith effort to ensure that, in the event an Application does not supply the function or data, the facility still operates, and performs whatever part of its purpose remains meaningful, or
        b) under the GNU GPL, with none of the additional permissions of this License applicable to that copy.
        
3. Object Code Incorporating Material from Library Header Files.

        The object code form of an Application may incorporate material from a header file that is part of the Library. You may convey such object code under terms of your choice, provided that, if the incorporated material is not limited to numerical parameters, data structure layouts and accessors, or small macros, inline functions and templates (ten or fewer lines in length), you do both of the following:
        
        a) Give prominent notice with each copy of the object code that the Library is used in it and that the Library and its use are covered by this License.
        b) Accompany the object code with a copy of the GNU GPL and this license document.

4. Combined Works.

        You may convey a Combined Work under terms of your choice that, taken together, effectively do not restrict modification of the portions of the Library contained in the Combined Work and reverse engineering for debugging such modifications, if you also do each of the following:
        
        a) Give prominent notice with each copy of the Combined Work that the Library is used in it and that the Library and its use are covered by this License.
        b) Accompany the Combined Work with a copy of the GNU GPL and this license document.
        c) For a Combined Work that displays copyright notices during execution, include the copyright notice for the Library among these notices, as well as a reference directing the user to the copies of the GNU GPL and this license document.
        d) Do one of the following:
        0) Convey the Minimal Corresponding Source under the terms of this License, and the Corresponding Application Code in a form suitable for, and under terms that permit, the user to recombine or relink the Application with a modified version of the Linked Version to produce a modified Combined Work, in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.
        1) Use a suitable shared library mechanism for linking with the Library. A suitable mechanism is one that (a) uses at run time a copy of the Library already present on the user's computer system, and (b) will operate properly with a modified version of the Library that is interface-compatible with the Linked Version.
        e) Provide Installation Information, but only if you would otherwise be required to provide such information under section 6 of the GNU GPL, and only to the extent that such information is necessary to install and execute a modified version of the Combined Work produced by recombining or relinking the Application with a modified version of the Linked Version. (If you use option 4d0, the Installation Information must accompany the Minimal Corresponding Source and Corresponding Application Code. If you use option 4d1, you must provide the Installation Information in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.)
5. Combined Libraries.

        You may place library facilities that are a work based on the Library side by side in a single library together with other library facilities that are not Applications and are not covered by this License, and convey such a combined library under terms of your choice, if you do both of the following:
        
        a) Accompany the combined library with a copy of the same work based on the Library, uncombined with any other library facilities, conveyed under the terms of this License.
        b) Give prominent notice with the combined library that part of it is a work based on the Library, and explaining where to find the accompanying uncombined form of the same work.
        
6. Revised Versions of the GNU Lesser General Public License.

        The Free Software Foundation may publish revised and/or new versions of the GNU Lesser General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.
        
        Each version is given a distinguishing version number. If the Library as you received it specifies that a certain numbered version of the GNU Lesser General Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that published version or of any later version published by the Free Software Foundation. If the Library as you received it does not specify a version number of the GNU Lesser General Public License, you may choose any version of the GNU Lesser General Public License ever published by the Free Software Foundation.
        
        If the Library as you received it specifies that a proxy can decide whether future versions of the GNU Lesser General Public License shall apply, that proxy's public statement of acceptance of any version is permanent authorization for you to choose that version for the Library.`
        break
      
      case "other":
        licenseText = ""
        break
    }
    return licenseText
  }
  catch(err){
    console.log('Error Occured during license section rendering', err)
  }

}

function generateMarkdown(data) {
  return `# **${data.title}**


${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}<!--Hide URL-->


## 📰 Description

${data.description}

## 🔎 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## 💾 Installation <a id="installation"></a>

${data.installation}

## 🖱️ Usage <a id="usage"></a>


${data.usage}

## 🌐 Contributing <a id="contributing"></a>


${data.contributing}

## 📝 Tests <a id="tests"></a>


${data.tests}

## ✋ Questions <a id="questions"></a>


If you have any questions, feel free to contact me at:

- *GitHub: [${data.git_hub}](https://github.com/${data.git_hub})*
- *Email: ${data.email}*

## 🪪 License <a id="license"></a>

${renderLicenseSection(data.license, data.copyright)}
`;
}

export default generateMarkdown;
