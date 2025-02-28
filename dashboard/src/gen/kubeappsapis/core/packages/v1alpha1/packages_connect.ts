// Copyright 2021-2023 the Kubeapps contributors.
// SPDX-License-Identifier: Apache-2.0

// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts,import_extension=none"
// @generated from file kubeappsapis/core/packages/v1alpha1/packages.proto (package kubeappsapis.core.packages.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {
  CreateInstalledPackageRequest,
  CreateInstalledPackageResponse,
  DeleteInstalledPackageRequest,
  DeleteInstalledPackageResponse,
  GetAvailablePackageDetailRequest,
  GetAvailablePackageDetailResponse,
  GetAvailablePackageSummariesRequest,
  GetAvailablePackageSummariesResponse,
  GetAvailablePackageVersionsRequest,
  GetAvailablePackageVersionsResponse,
  GetInstalledPackageDetailRequest,
  GetInstalledPackageDetailResponse,
  GetInstalledPackageResourceRefsRequest,
  GetInstalledPackageResourceRefsResponse,
  GetInstalledPackageSummariesRequest,
  GetInstalledPackageSummariesResponse,
  UpdateInstalledPackageRequest,
  UpdateInstalledPackageResponse,
} from "./packages_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Each packages v1alpha1 plugin must implement at least the following rpcs:
 *
 *
 * @generated from service kubeappsapis.core.packages.v1alpha1.PackagesService
 */
export const PackagesService = {
  typeName: "kubeappsapis.core.packages.v1alpha1.PackagesService",
  methods: {
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.GetAvailablePackageSummaries
     */
    getAvailablePackageSummaries: {
      name: "GetAvailablePackageSummaries",
      I: GetAvailablePackageSummariesRequest,
      O: GetAvailablePackageSummariesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.GetAvailablePackageDetail
     */
    getAvailablePackageDetail: {
      name: "GetAvailablePackageDetail",
      I: GetAvailablePackageDetailRequest,
      O: GetAvailablePackageDetailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.GetAvailablePackageVersions
     */
    getAvailablePackageVersions: {
      name: "GetAvailablePackageVersions",
      I: GetAvailablePackageVersionsRequest,
      O: GetAvailablePackageVersionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.GetInstalledPackageSummaries
     */
    getInstalledPackageSummaries: {
      name: "GetInstalledPackageSummaries",
      I: GetInstalledPackageSummariesRequest,
      O: GetInstalledPackageSummariesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.GetInstalledPackageDetail
     */
    getInstalledPackageDetail: {
      name: "GetInstalledPackageDetail",
      I: GetInstalledPackageDetailRequest,
      O: GetInstalledPackageDetailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.CreateInstalledPackage
     */
    createInstalledPackage: {
      name: "CreateInstalledPackage",
      I: CreateInstalledPackageRequest,
      O: CreateInstalledPackageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.UpdateInstalledPackage
     */
    updateInstalledPackage: {
      name: "UpdateInstalledPackage",
      I: UpdateInstalledPackageRequest,
      O: UpdateInstalledPackageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.DeleteInstalledPackage
     */
    deleteInstalledPackage: {
      name: "DeleteInstalledPackage",
      I: DeleteInstalledPackageRequest,
      O: DeleteInstalledPackageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kubeappsapis.core.packages.v1alpha1.PackagesService.GetInstalledPackageResourceRefs
     */
    getInstalledPackageResourceRefs: {
      name: "GetInstalledPackageResourceRefs",
      I: GetInstalledPackageResourceRefsRequest,
      O: GetInstalledPackageResourceRefsResponse,
      kind: MethodKind.Unary,
    },
  },
} as const;
