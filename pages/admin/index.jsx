import React, { useRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../_firebase';

function Admin() {
  const uname = useRef();
  const pwd = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'admin', uname.current.value);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      if (docSnap.data().password === pwd.current.value) {
        sessionStorage.setItem('uname', uname.current.value);
        sessionStorage.setItem('pwd', pwd.current.value);
        console.log('Authenticated');
      }
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              AB Solutions Admin
            </h1>

            <p className="mt-4 text-gray-500">
              Geef inloggegevens in om verder te gaan
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
          >
            <div>
              <div className="relative">
                <input
                  ref={uname}
                  type="text"
                  className="p-4 pr-12 shadow-sm focus:ring-2 focus:ring-cyan-700 sm:focus:ring-0 border appearance-none border-gray-200 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-lg focus:outline-cyan-700 text-sm leading-6"
                  placeholder="Gebruikersnaam"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  ref={pwd}
                  type="password"
                  className="p-4 pr-12 shadow-sm focus:ring-2 focus:ring-cyan-700 sm:focus:ring-0 border appearance-none border-gray-200 focus:text-cyan-900 text-slate-500 font-medium py-2 w-full bg-neutral-100 rounded-lg focus:outline-cyan-700 text-sm leading-6"
                  placeholder="Wachtwoord"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block px-12 py-3 ml-3 text-sm font-medium text-white bg-cyan-700 rounded-lg"
              >
                Log in
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-contain w-full h-full"
            src="/assets/images/absolutions.png"
            alt="AB Solutions Pool"
          />
        </div>
      </section>
    </div>
  );
}

export default Admin;
