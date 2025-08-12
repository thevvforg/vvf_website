import React from 'react'
import { useTranslation } from 'react-i18next'

export default function BecomeMember() {
    const {t} = useTranslation();
    return (
    <section className="bg-green-50 py-16 text-center px-4">
            <h1 className="text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
                {t("vvf_membership_heading")}
           </h1>
            <p className="mt-4 text-lg text-gray-600">
                {t("vvf_membership_body")}
            </p>
      </section>  )
}
