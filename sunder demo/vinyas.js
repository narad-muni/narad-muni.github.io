// config

var SunderUtility = {
    "ac_":"align-content:",
    "ai_":"align-items:",
    "as_":"align-self:",
    "a_":"animation:",
    "adel_":"animation-delay:",
    "adir_":"animation-direction:",
    "adur_":"animation-duration:",
    "afm_":"animation-fill-mode:",
    "aic_":"animation-iteration-count:",
    "an_":"animation-name:",
    "aps_":"animation-play-state:",
    "ar_":"aspect-ratio:",
    "atf_":"animation-timing-function:",
    "bv_":"backface-visibility:",
    "bg_":"background:",
    "bga_":"background-attachment:",
    "bbm_":"background-blend-mode:",
    "bc_":"background-clip:",
    "bgc_":"background-color:",
    "bgi_":"background-image:",
    "bgo_":"background-origin:",
    "bgp_":"background-position:",
    "bgr_":"background-repeat:",
    "bgs_":"background-size:",
    "blsz_":"block-size:",
    "b_":"border:",
    "bb_":"border-block:",
    "bbc_":"border-block-color:",
    "bbe_":"border-block-end:",
    "bbec_":"border-block-end-color:",
    "bbes_":"border-block-end-style:",
    "bbew_":"border-block-end-width:",
    "bbst_":"border-block-start:",
    "bbsc_":"border-block-start-color:",
    "bbss_":"border-block-start-style:",
    "bbsw_":"border-block-start-width:",
    "bbs_":"border-block-style:",
    "bbw_":"border-block-width:",
    "bbt_":"border-bottom:",
    "bbtc_":"border-bottom-color:",
    "bbtlr_":"border-bottom-left-radius:",
    "bbtrr_":"border-bottom-right-radius:",
    "bbts_":"border-bottom-style:",
    "bbtw_":"border-bottom-width:",
    "bcl_":"border-collapse:",
    "bcol_":"border-color:",
    "beer_":"border-end-end-radius:",
    "besr_":"border-end-start-radius:",
    "bim_":"border-image:",
    "bimo_":"border-image-outset:",
    "bimr_":"border-image-repeat:",
    "bims_":"border-image-slice:",
    "bimso_":"border-image-source:",
    "bimw_":"border-image-width:",
    "bi_":"border-inline:",
    "bic_":"border-inline-color:",
    "bie_":"border-inline-end:",
    "biec_":"border-inline-end-color:",
    "bies_":"border-inline-end-style:",
    "biew_":"border-inline-end-width:",
    "bist_":"border-inline-start:",
    "bistc_":"border-inline-start-color:",
    "bists_":"border-inline-start-style:",
    "bistw_":"border-inline-start-width:",
    "bis_":"border-inline-style:",
    "biw_":"border-inline-width:",
    "bl_":"border-left:",
    "blc_":"border-left-color:",
    "bls_":"border-left-style:",
    "blw_":"border-left-width:",
    "brad_":"border-radius:",
    "br_":"border-right:",
    "brc_":"border-right-color:",
    "brs_":"border-right-style:",
    "brw_":"border-right-width:",
    "bs_":"border-spacing:",
    "bser_":"border-start-end-radius:",
    "bssr_":"border-start-start-radius:",
    "bsy_":"border-style:",
    "bt_":"border-top:",
    "btc_":"border-top-color:",
    "btlrad_":"border-top-left-radius:",
    "btrrad_":"border-top-right-radius:",
    "btsy_":"border-top-style:",
    "btw_":"border-top-width:",
    "bw_":"border-width:",
    "bt_":"bottom:",
    "bsh_":"box-shadow:",
    "bsz_":"box-sizing:",
    "cps_":"caption-side:",
    "crtc_":"caret-color:",
    "clr_":"clear:",
    "c_":"color:",
    "cc_":"column-count:",
    "cf_":"column-fill:",
    "cg_":"column-gap:",
    "cr_":"column-rule:",
    "crc_":"column-rule-color:",
    "crs_":"column-rule-style:",
    "crw_":"column-rule-width:",
    "cs_":"column-span:",
    "cw_":"column-width:",
    "cont_":"content:",
    "col_":"columns:",
    "cur_":"cursor:",
    "dir_":"direction:",
    "dis_":"display:",
    "empty_":"empty-cells:",
    "fi_":"fill:",
    "fio_":"fill-opacity:",
    "fil_":"filter:",
    "f_":"flex:",
    "fb_":"flex-basis:",
    "fd_":"flex-direction:",
    "ff_":"flex-flow:",
    "fg_":"flex-grow:",
    "fs_":"flex-shrink:",
    "fw_":"flex-wrap:",
    "flt_":"float:",
    "ft_":"font:",
    "ftf_":"font-family:",
    "ftfs_":"font-feature-settings:",
    "ftk_":"font-kerning:",
    "ftsz_":"font-size:",
    "fts_":"font-style:",
    "ftv_":"font-variant:",
    "ftvc_":"font-variant-caps:",
    "ftvn_":"font-variant-numeric:",
    "ftw_":"font-weight:",
    "gap_":"gap:",
    "g_":"grid:",
    "ga_":"grid-area:",
    "gac_":"grid-auto-columns:",
    "gaf_":"grid-auto-flow:",
    "gar_":"grid-auto-rows:",
    "gc_":"grid-column:",
    "gce_":"grid-column-end:",
    "gcs_":"grid-column-start:",
    "gr_":"grid-row:",
    "gre_":"grid-row-end:",
    "grs_":"grid-row-start:",
    "gt_":"grid-template:",
    "gta_":"grid-template-areas:",
    "gtc_":"grid-template-columns:",
    "gtr_":"grid-template-rows:",
    "h_":"height:",
    "hy_":"hyphens:",
    "is_":"inline-size:",
    "jc_":"justify-content:",
    "ji_":"justify-items:",
    "js_":"justify-self:",
    "l_":"left:",
    "ls_":"letter-spacing:",
    "lh_":"line-height:",
    "lsy_":"list-style:",
    "lsyi_":"list-style-image:",
    "lsyp_":"list-style-position:",
    "lsyt_":"list-style-type:",
    "m_":"margin:",
    "my_":"margin-block:",
    "mble_":"margin-block-end:",
    "mbls_":"margin-block-start:",
    "mb_":"margin-bottom:",
    "mx_":"margin-inline:",
    "mie_":"margin-inline-end:",
    "mies_":"margin-inline-start:",
    "ml_":"margin-left:",
    "mr_":"margin-right:",
    "mt_":"margin-top:",
    "mkr_":"marker:",
    "mkre_":"marker-end:",
    "mkrm_":"marker-mid:",
    "mkrs_":"marker-start:",
    "msk_":"mask:",
    "mskc_":"mask-clip:",
    "mskco_":"mask-composite:",
    "mski_":"mask-image:",
    "msko_":"mask-origin:",
    "mskp_":"mask-position:",
    "mskr_":"mask-repeat:",
    "msksz_":"mask-size:",
    "mbs_":"max-block-size:",
    "max-h_":"max-height:",
    "max-i_":"max-inline-size:",
    "max-w_":"max-width:",
    "min-b_":"min-block-size:",
    "min-h_":"min-height:",
    "min-i_":"min-inline-size:",
    "min-w_":"min-width:",
    "mbm_":"mix-blend-mode:",
    "o_":"opacity:",
    "ord_":"order:",
    "out_":"outline:",
    "outc_":"outline-color:",
    "outo_":"outline-offset:",
    "outs_":"outline-style:",
    "outw_":"outline-width:",
    "ov_":"overflow:",
    "ovw_":"overflow-wrap:",
    "ovx_":"overflow-x:",
    "ovy_":"overflow-y:",
    "p_":"padding:",
    "py_":"padding-block:",
    "pbe_":"padding-block-end:",
    "pbs_":"padding-block-start:",
    "pb_":"padding-bottom:",
    "px_":"padding-inline:",
    "pie_":"padding-inline-end:",
    "pis_":"padding-inline-start:",
    "pl_":"padding-left:",
    "pr_":"padding-right:",
    "pt_":"padding-top:",
    "per_":"perspective:",
    "pero_":"perspective-origin:",
    "plc_":"place-content:",
    "pli_":"place-items:",
    "pls_":"place-self:",
    "pos_":"position:",
    "res_":"resize:",
    "r_":"right:",
    "rg_":"row-gap:",
    "scb_":"scroll-behavior:",
    "scm_":"scroll-margin:",
    "scmbl_":"scroll-margin-block:",
    "scmble_":"scroll-margin-block-end:",
    "scmbls_":"scroll-margin-block-start:",
    "scmb_":"scroll-margin-bottom:",
    "scmbi_":"scroll-margin-inline:",
    "scmbie_":"scroll-margin-inline-end:",
    "scmbis_":"scroll-margin-inline-start:",
    "scml_":"scroll-margin-left:",
    "scmr_":"scroll-margin-right:",
    "scmt_":"scroll-margin-top:",
    "scp_":"scroll-padding:",
    "scpbl_":"scroll-padding-block:",
    "scpble_":"scroll-padding-block-end:",
    "scpbls_":"scroll-padding-block-start:",
    "scpb_":"scroll-padding-bottom:",
    "scpi_":"scroll-padding-inline:",
    "scpie_":"scroll-padding-inline-end:",
    "scpis_":"scroll-padding-inline-start:",
    "scpl_":"scroll-padding-left:",
    "scpr_":"scroll-padding-right:",
    "scpt_":"scroll-padding-top:",
    "scsa_":"scroll-snap-align:",
    "scss_":"scroll-snap-stop:",
    "scst_":"scroll-snap-type:",
    "shm_":"shape-margin:",
    "sho_":"shape-outside:",
    "s_":"stroke:",
    "sc_":"stroke-color:",
    "sda_":"stroke-dasharray:",
    "sdo_":"stroke-dashoffset:",
    "slc_":"stroke-linecap:",
    "slj_":"stroke-linejoin:",
    "so_":"stroke-opacity:",
    "sw_":"stroke-width:",
    "tbs_":"tab-size:",
    "tl_":"table-layout:",
    "ta_":"text-align:",
    "tal_":"text-align-last:",
    "td_":"text-decoration:",
    "tdc_":"text-decoration-color:",
    "tdl_":"text-decoration-line:",
    "tdsl_":"text-decoration-skip-ink:",
    "tds_":"text-decoration-style:",
    "te_":"text-emphasis:",
    "tec_":"text-emphasis-color:",
    "tep_":"text-emphasis-position:",
    "tes_":"text-emphasis-style:",
    "ti_":"text-indent:",
    "to_":"text-overflow:",
    "ts_":"text-shadow:",
    "tt_":"text-transform:",
    "tup_":"text-underline-position:",
    "t_":"top:",
    "tr_":"transform:",
    "tro_":"transform-origin:",
    "trs_":"transform-style:",
    "trn_":"transition:",
    "trnd_":"transition-delay:",
    "trndu_":"transition-duration:",
    "trnp_":"transition-property:",
    "trtf_":"transition-timing-function:",
    "us_":"user-select:",
    "va_":"vertical-align:",
    "vis_":"visibility:",
    "wi_":"widows:",
    "wsp_":"white-space:",
    "w_":"width:",
    "wb_":"word-break:",
    "ws_":"word-spacing:",
    "ww_":"word-wrap:",
    "wm_":"writing-mode:",
    "z_":"z-index:"
}
  
var preDefined = {
    "sm":"640px",
    "md":"768px",
    "lg":"1024px",
    "xl":"1280px",
    "xxl":"1536px",
    "h":"hover",
    "a":"active",
    "f":"focus",
    "v":"visited",
    "-w":"width",
    "-h":"height",
}